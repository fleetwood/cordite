import SelectInput from 'components/forms/SelectInput'
import SelectRange from 'components/forms/SelectRange'
import TextInput from 'components/forms/TextInput'
import Section from 'components/ui/section'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharClassStub,CharStatCreateProps,Stat} from 'prisma/context'
import {useEffect,useState} from 'react'
import {twMerge} from 'tailwind-merge'

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
  const [charStats, setCharStats] = useState<CharStatCreateProps[]>([])
  // const [abilities, setAbilities] = useState<Ability[]>()

  useEffect(() => {
    if (!stats) return

    stats.forEach(stat => {
      setCharStats((current) => [...current, {
        characterId: undefined,
        statId: stat.id,
        level: 0
      }])
    })
  }, [stats])


  const [step, setStep] = useState(0)
  const steps = ['step1', 'step2', 'step3', 'step4', 'review']

  return (
    <div className="flex flex-col">
      {/* NAVIGATION */}
      <div className="mt-4 border-t border-primary/30 w-full">
        <ul className="steps w-full">
          <li
            className={twMerge('step', step === 0 ? 'step-primary' : '')}
            onClick={() => setStep(0)}
          ></li>
          <li
            className={twMerge('step', step === 1 ? 'step-primary' : '')}
            onClick={() => setStep(1)}
          ></li>
          <li
            className={twMerge('step', step === 2 ? 'step-primary' : '')}
            onClick={() => setStep(2)}
          ></li>
          <li
            className={twMerge('step', step === 3 ? 'step-primary' : '')}
            onClick={() => setStep(3)}
          ></li>
          <li
            className={twMerge('step', step === 4 ? 'step-primary' : '')}
            onClick={() => setStep(4)}
          ></li>
        </ul>
      </div>

      <div className="relative">
        {/* STEP 1 */}
        <div
          className={twMerge(
            'transition-all duration-200 ease-out',
            step === 0 ? 'scale-100' : 'scale-0'
          )}
        >
          <TextInput label="Name" value={name} setValue={setName} />

          <SelectRange
            label={`Level ${level}`}
            min={1}
            max={10}
            step={1}
            value={level}
            setValue={setLevel}
            className={twMerge(
              level > 9 ? 'range-error bg-error/10' : 
              level > 6 ? 'range-warning bg-warning/10' : 
              level > 3 ? 'range-primary bg-primary/10' : 
              level > 1 ? 'range-secondary bg-secondary/10' :
              'range-neutral'
              )}/>

          <SelectInput
            label="Choose your Character Class"
            placeholder="Choose..."
            items={classList}
            item={charClass}
            setItem={setCharClass}
          />
        </div>

        {/* STEP 2 */}
        <div
          className={twMerge(
            'transition-all duration-200 ease-out',
            step === 1 ? 'scale-100' : 'scale-0'
          )}
        >
          {(stats ?? []).map((stat, i) => (
            // <SelectRange label={stats[i].name} value={stat.level} setValue={(v) => charStats[i].level = v as number} min={-2} max={2} step={1} />
            <div key={stat.id}>{stat.name}</div>
          ))}
        </div>

        {/* STEP 3 */}
        <div
          className={twMerge(
            'transition-all duration-200 ease-out',
            step === 2 ? 'scale-100' : 'scale-0'
          )}
        ></div>

        {/* REVIEW */}
        <div
          className={twMerge(
            'transition-all duration-200 ease-out',
            step === 3 ? 'scale-100' : 'scale-0'
          )}
        ></div>
      </div>
    </div>
  )
}

export default CharacterCreateView