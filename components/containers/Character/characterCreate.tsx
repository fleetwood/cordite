import {Disclosure, Transition} from '@headlessui/react'
import SelectInput from 'components/forms/SelectInput'
import TextInput from 'components/forms/TextInput'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharClassStub,CharStatCreateProps,GenerateCharacterCreateProps,PointsSpent,Stat, air, charisma, earth, finesse, fire, fortitude, intuition, life, light, physique, spacetime, totalPoints, water, wit} from 'prisma/context'
import {ReactNode, useEffect,useState} from 'react'
import {twMerge} from 'tailwind-merge'
import StatRange from './forms/StatRange'
import SelectRange from 'components/forms/SelectRange'
import useDebug from 'hooks/useDebug'
import {DEBUG, notNullOrEmpty} from 'utils/helpers'
import Label from 'components/forms/Label'
import Collapse from 'components/ui/collapse'
import {BackpackIcon, BarchartIcon, CheckmarkIcon, ChevronUpIcon, GraduateIcon, UserCheckIcon, UserIcon} from 'components/ui/icons'
import {Retryer} from 'react-query/types/core/retryer'
import CharCreateNav from './create/Nav'
import CharStepPanel from './create/Panel'

const {debug} = useDebug('characterCreate', DEBUG)

type StepProps = {
  children?: ReactNode
  current: number 
}

const CharacterCreateView = () => {
  const {user, invalidate: invalidateUser, isLoggedOut, isAdmin, isDm} = userContext()

  const {
    data: charClasses,
    isLoading: classesLoading,
    invalidate: invalidateClasses,
  } = useRocketQuery<CharClassStub[]>({
    name: 'char-class-stubs',
    url: 'charClass/stubs',
  })

  const {
    data: stats,
    isLoading: statsLoading,
    invalidate: invalidateStats,
  } = useRocketQuery<Stat[]>({
    name: 'stat-stubs',
    url: 'stat/stubs',
  })

  const classList: { id: string; name: string }[] = (charClasses??[]).map((p) => {
    return { id: p.id, name: p.parentClass ? `${p.parentClass.name}: ${p.name}`: p.name }
  }).sort((a,b) => a.name > b.name ? 1 : -1)
  
  const [name, setName] = useState()
  const [level, setLevel] = useState(1)
  const [charClass, setCharClass] = useState<CharClassStub>()

  const [phyStat, setPhy] = useState<CharStatCreateProps>()
  const [finStat, setFin] = useState<CharStatCreateProps>()
  const [witStat, setWit] = useState<CharStatCreateProps>()
  // "for" is a reserved keyword
  const [fortStat, setFort] = useState<CharStatCreateProps>()
  const [intStat, setInt] = useState<CharStatCreateProps>()
  const [chaStat, setCha] = useState<CharStatCreateProps>()

  const [fireStat, setFire] = useState<CharStatCreateProps>()
  const [airStat, setAir] = useState<CharStatCreateProps>()
  const [earthStat, setEarth] = useState<CharStatCreateProps>()
  const [waterStat, setWater] = useState<CharStatCreateProps>()
  const [lifeStat, setLife] = useState<CharStatCreateProps>()
  const [lightStat, setLight] = useState<CharStatCreateProps>()
  const [spacetimeStat, setSpacetime] = useState<CharStatCreateProps>()
  const CreateStats = [
    phyStat,
    finStat,
    witStat,
    fortStat,
    intStat,
    chaStat,
    fireStat,
    airStat,
    earthStat,
    waterStat,
    lifeStat,
    lightStat,
    spacetimeStat,
  ]

  // const [abilities, setAbilities] = useState<Ability[]>()

  const [statPoints, setStatPoints] = useState(0)
  const pointsSpent = PointsSpent(CreateStats)
  const availablePoints = statPoints - pointsSpent

  const [maxStat, setMaxStat ] = useState(3)
  const [numCast, setNumCast] = useState(0)
  const validations = [
    notNullOrEmpty(name) && notNullOrEmpty(charClass?.name),
    statPoints > 0 && availablePoints >= 0,
    false,
    false,
    false,
  ]
  
  useEffect(() => {
      // hella ugly but ¯\_(ツ)_/¯
      if (!stats) return
      GenerateCharacterCreateProps({
        stats,
        setCha,
        setFin,
        setFort,
        setInt,
        setPhy,
        setWit,
        setAir,
        setEarth,
        setWater,
        setFire,
        setLight,
        setLife,
        setSpacetime,
      })
  }, [stats])

  useEffect(() => {
    // start 4, +1 per odd level, +2 even level
    setStatPoints(() => totalPoints(level))
    setMaxStat(() => level < 2 ? 3 : level < 5 ? 8 : 13)
  }, [level])

  useEffect(() => {
    setNumCast(
      () => CreateStats.filter((s) => s?.cast === true && s.level > 0).length
    )
    
    if (pointsSpent >= statPoints) {
      setMaxStat(() => 0)
    }
    if (level == 1) {
      // can only have one level 3 stat
      setMaxStat(() =>
        CreateStats.filter((s) => s?.level >= 3).length > 0 ? 2 : 3
      )
    } else if (level < 5) {
      setMaxStat(4)
    } else if (level < 9) {
      // can only have one level 5 stat
      setMaxStat(() =>
        CreateStats.filter((s) => s?.level >= 5).length > 0 ? 4 : 5
      )
    } else if (level >= 9) {
      setMaxStat(5)
    } else setMaxStat(4)
  }, CreateStats)

  const [step, setStep] = useState(0)
  return (
    <div className="flex flex-col">
      {/* NAVIGATION */}
      <CharCreateNav step={step} setStep={setStep} validation={validations} />

      <div className="relative">
        {/* STEP 1 */}
        <CharStepPanel step={step} current={0} title="The Basics">
          <TextInput label="Name" value={name} setValue={setName} />

          <SelectRange
            label={`Level ${level}`}
            min={1}
            max={13}
            step={1}
            value={level}
            setValue={setLevel}
            className={twMerge(
              level > 9
                ? 'range-error bg-error/10'
                : level > 6
                ? 'range-warning bg-warning/10'
                : level > 3
                ? 'range-primary bg-primary/10'
                : level > 1
                ? 'range-secondary bg-secondary/10'
                : 'range-neutral'
            )}
          />

          <SelectInput
            label="Choose your Character Class"
            placeholder="Choose..."
            items={classList}
            item={charClass}
            setItem={setCharClass}
          />

        </CharStepPanel>

        {/* STEP 2 */}
        <CharStepPanel step={step} current={1} title="Your Stats">
          <Collapse label="How To">
            <p>
              CORDITE uses a unique system for generating stats. 1 stat
              point is awarded at every level above 1. At even levels, you
              gain an additional stat point, and you may only only
              increase casting stats at even levels.
            </p>
            <Label label="Level 1" />
            <ul className="list-disc pl-4">
              <li>
                Your stats on character creation must have a sum of 5.
              </li>
              <li>You cannot start with a stat above +3</li>
              <li>Only one stat can be 3</li>
            </ul>
            <Label label="All levels" />
            <ul className="list-disc pl-4">
              <li>You cannot lower a stat below -2</li>
              <li>Casting stats cost double</li>
              <li>You cannot have access to more than 2 elements</li>
            </ul>
            <p>
              The caps (outside of prestige levels) for players stats are
              +5, and cannot go below -2. You cannot raise a stat to +5
              until level 5, and you cannot raise a second stat to +5
              until level 9.
            </p>
          </Collapse>
          <h4
            className="sticky top-0 z-10 
            shadow-sm shadow-black 
            bg-neutral p-2"
          >
            <span
              className={twMerge(
                'px-2 font-semibold',
                availablePoints > 0
                  ? 'text-secondary'
                  : availablePoints < 0
                  ? 'text-warning'
                  : 'text-neutral-content/50'
              )}
            >
              Available Points: {availablePoints} / {statPoints}
            </span>
          </h4>
          <StatRange
            label="CHA"
            value={chaStat}
            setValue={setCha}
            min={-2}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="FIN"
            value={finStat}
            setValue={setFin}
            min={-2}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="FORT"
            value={fortStat}
            setValue={setFort}
            min={-2}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="INT"
            value={intStat}
            setValue={setInt}
            min={-2}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="PHY"
            value={phyStat}
            setValue={setPhy}
            min={-2}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="WIT"
            value={witStat}
            setValue={setWit}
            min={-2}
            max={maxStat}
            available={availablePoints}
          />

          <StatRange
            label="AIR"
            value={airStat}
            setValue={setAir}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="EARTH"
            value={earthStat}
            setValue={setEarth}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="WATER"
            value={waterStat}
            setValue={setWater}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="FIRE"
            value={fireStat}
            setValue={setFire}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="LIFE"
            value={lifeStat}
            setValue={setLife}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="LIGHT"
            value={lightStat}
            setValue={setLight}
            max={maxStat}
            available={availablePoints}
          />
          <StatRange
            label="SPACE"
            value={spacetimeStat}
            setValue={setSpacetime}
            max={maxStat}
            available={availablePoints}
          />
        </CharStepPanel>

        {/* STEP 3 */}
        <CharStepPanel
          step={step}
          current={2}
          title="Class Abilities"
        ></CharStepPanel>

        {/* REVIEW */}
        <CharStepPanel step={step} current={3}>
          <h2>Step 4</h2>
        </CharStepPanel>
      </div>
    </div>
  )
}

export default CharacterCreateView