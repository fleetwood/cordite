import {Transition} from '@headlessui/react'
import SelectInput from 'components/forms/SelectInput'
import SelectRange from 'components/forms/SelectRange'
import TextInput from 'components/forms/TextInput'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharClassStub,CharStatCreateProps,Stat} from 'prisma/context'
import {ReactNode, useEffect,useState} from 'react'
import {twMerge} from 'tailwind-merge'

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

    const createProp = (prop: string) => {
      const stat = stats.find((a) => a.name.toLowerCase() === prop)
      return stat
        ? {
            characterId: undefined,
            statId: stat.id,
            level: 0,
          }
        : undefined
    }

    setCha(() => createProp(charisma))
    setFin(() => createProp(finesse))
    setFort(() => createProp(fortitude))
    setInt(() => createProp(intuition))
    setPhy(() => createProp(physique))
    setWit(() => createProp(wit))

    setAir(() => createProp(air))
    setEarth(() => createProp(earth))
    setWater(() => createProp(water))
    setFire(() => createProp(fire))
    setLight(() => createProp(light))
    setLife(() => createProp(life))
    setSpacetime(() => createProp(spacetime))
  }, [stats])

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
          <SelectRange
            label="CHA"
            value={chaStat?.level ?? 0}
            setValue={(level) =>
              setCha((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="FIN"
            value={finStat?.level ?? 0}
            setValue={(level) =>
              setFin((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="FORT"
            value={fortStat?.level ?? 0}
            setValue={(level) =>
              setFort((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="INT"
            value={intStat?.level ?? 0}
            setValue={(level) =>
              setInt((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="PHY"
            value={phyStat?.level ?? 0}
            setValue={(level) =>
              setPhy((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="WIT"
            value={witStat?.level ?? 0}
            setValue={(level) =>
              setWit((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />

          <SelectRange
            label="AIR"
            value={airStat?.level ?? 0}
            setValue={(level) =>
              setAir((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="EARTH"
            value={earthStat?.level ?? 0}
            setValue={(level) =>
              setEarth((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="WATER"
            value={waterStat?.level ?? 0}
            setValue={(level) =>
              setWater((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="FIRE"
            value={fireStat?.level ?? 0}
            setValue={(level) =>
              setFire((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="LIFE"
            value={lifeStat?.level ?? 0}
            setValue={(level) =>
              setLife((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="LIGHT"
            value={lightStat?.level ?? 0}
            setValue={(level) =>
              setLight((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
          />
          <SelectRange
            label="SPACE"
            value={spacetimeStat?.level ?? 0}
            setValue={(level) =>
              setSpacetime((c) => {
                return { ...c, level }
              })
            }
            min={-2}
            max={2}
            step={1}
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