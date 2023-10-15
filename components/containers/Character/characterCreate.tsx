import {Transition} from '@headlessui/react'
import SelectInput from 'components/forms/SelectInput'
import TextInput from 'components/forms/TextInput'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharClassStub,CharStatCreateProps,Stat} from 'prisma/context'
import {ReactNode, useEffect,useState} from 'react'
import {twMerge} from 'tailwind-merge'
import StatRange from './forms/StatRange'
import SelectRange from 'components/forms/SelectRange'

const charisma =  'charisma',
      finesse =   'finesse',
      fortitude = 'fortitude',
      intuition = 'intuition',
      physique =  'physique',
      wit =       'wit',
      air =       'air',
      earth =     'earth',
      water =     'water',
      fire =      'fire',
      light =     'light',
      life =      'life',
      spacetime = 'spacetime'

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
  
  const [statPoints, setStatPoints] = useState(0)
  const [currentStatPoints, setCurrentStatPoints] = useState(0)

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
  // const [abilities, setAbilities] = useState<Ability[]>()

  useEffect(() => {
    // hella ugly but ¯\_(ツ)_/¯
    if (!stats) return

    const createProp = (prop: string, cast = false) => {
      const stat = stats.find((a) => a.name.toLowerCase() === prop)
      return stat
        ? {
            characterId: undefined,
            statId: stat.id,
            level: 0,
            cast
          }
        : undefined
    }

    setCha(() => createProp(charisma))
    setFin(() => createProp(finesse))
    setFort(() => createProp(fortitude))
    setInt(() => createProp(intuition))
    setPhy(() => createProp(physique))
    setWit(() => createProp(wit))

    setAir(() => createProp(air, true))
    setEarth(() => createProp(earth, true))
    setWater(() => createProp(water, true))
    setFire(() => createProp(fire, true))
    setLight(() => createProp(light, true))
    setLife(() => createProp(life, true))
    setSpacetime(() => createProp(spacetime, true))
  }, [stats])

  useEffect(() => {
    setStatPoints(() => level+4)
    setCurrentStatPoints(() => level+4)
  }, [level])

  const [step, setStep] = useState(0)
  const Step = ({ children, current }: { children: ReactNode, current: number }) => (
    <Transition
      as={'div'}
      enter='transition-opacity duration-200'
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      leave='transition-opacity duration-200'
      show={step === current}
    >
      {children}
    </Transition>
  )

  return (
    <div className="flex flex-col">
      {/* NAVIGATION */}
      <div className="mt-4 border-t border-primary/30 w-full">
        <ul className="steps w-full">
          <li
            className={twMerge(
              'step cursor-pointer hover:step-info',
              step === 0 ? 'step-primary' : ''
            )}
            onClick={() => setStep(0)}
          ></li>
          <li
            className={twMerge(
              'step cursor-pointer hover:step-info',
              step === 1 ? 'step-primary' : ''
            )}
            onClick={() => setStep(1)}
          ></li>
          <li
            className={twMerge(
              'step cursor-pointer hover:step-info',
              step === 2 ? 'step-primary' : ''
            )}
            onClick={() => setStep(2)}
          ></li>
          <li
            className={twMerge(
              'step cursor-pointer hover:step-info',
              step === 3 ? 'step-primary' : ''
            )}
            onClick={() => setStep(3)}
          ></li>
          <li
            className={twMerge(
              'step cursor-pointer hover:step-info',
              step === 4 ? 'step-primary' : ''
            )}
            onClick={() => setStep(4)}
          ></li>
        </ul>
      </div>

      <div className="relative">
        {/* STEP 1 */}
        <Step current={0}>
          <div>
            <TextInput label="Name" value={name} setValue={setName} />

            <SelectRange
              label={`Level ${level}`}
              min={1}
              max={10}
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
          </div>
        </Step>
        {/* STEP 2 */}
        <Step current={1}>
          <Typography>
            CORDITE uses a unique system for generating stats; your stats on
            character creation must have a sum of 5. You cannot lower a stat
            below -2, and you cannot start with a stat above +3. Casting stats
            count for double, and you cannot have access to more than 2
            elements. 1 stat point is awarded at every level above 1. At even
            levels, you gain an additional stat point; you can only increase
            casting stats at even levels.
          </Typography>
          <h3 className="sticky top-0 z-10 shadow-sm shadow-black bg-base-100 p-2">
            Available points:
            <span className={twMerge(
              'px-2 font-semibold',
              currentStatPoints > 0 ? 'text-primary' :
              currentStatPoints < 0 ? 'text-warning' :
              'text-neutral'
            )}>{currentStatPoints}</span>
          </h3>
          <StatRange 
            label="CHA"
            value={chaStat}
            setValue={setCha}
            min={-2}
            max={2}
          />
          <StatRange
            label="FIN"
            value={finStat}
            setValue={setFin}
            min={-2}
            max={2}
          />
          <StatRange
            label="FORT"
            value={fortStat}
            setValue={setFort}
            min={-2}
            max={2}
          />
          <StatRange
            label="INT"
            value={intStat}
            setValue={setInt}
            min={-2}
            max={2}
          />
          <StatRange
            label="PHY"
            value={phyStat}
            setValue={setPhy}
            min={-2}
            max={2}
          />
          <StatRange
            label="WIT"
            value={witStat}
            setValue={setWit}
            min={-2}
            max={2}
          />

          <StatRange
            label="AIR"
            value={airStat}
            setValue={setAir}
            max={2}
          />
          <StatRange
            label="EARTH"
            value={earthStat}
            setValue={setEarth}
            max={2}
          />
          <StatRange
            label="WATER"
            value={waterStat}
            setValue={setWater}
            max={2}
            />
          <StatRange
            label="FIRE"
            value={fireStat}
            setValue={setFire}
            max={2}
            />
          <StatRange
            label="LIFE"
            value={lifeStat}
            setValue={setLife}
            max={2}
            />
          <StatRange
            label="LIGHT"
            value={lightStat}
            setValue={setLight}
            max={2}
          />
          <StatRange
            label="SPACE"
            value={spacetimeStat}
            setValue={setSpacetime}
            max={2}
          />
        </Step>

        {/* STEP 3 */}
        <Step current={2}>
          <h2>Step 3</h2>
        </Step>

        {/* REVIEW */}
        <Step current={3}>
          <h2>Step 4</h2>
        </Step>
      </div>
    </div>
  )
}

export default CharacterCreateView