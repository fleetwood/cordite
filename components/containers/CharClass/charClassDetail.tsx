import Section from 'components/ui/section'
import {userContext} from 'context/UserContext'
import {Ability, CharClassDetail} from 'prisma/context'
import {classNameProps} from 'types'
import AbilityCard from '../Ability/AbilityCard'
import CharacterStubCard from '../Character/characterCard'
import AddAbilityDialog from './charClassAddAbility'
import {useState} from 'react'
import {twMerge} from 'tailwind-merge'

type Props = classNameProps & {
  charClass: CharClassDetail
  invalidate: () => void
}

const CharClassDetailView = ({ charClass, ...props }: Props) => {
  const { isAdmin, isDM } = userContext()
  const [ability, setAbility] = useState<Ability>()

  return (
    <div>
      <div>{charClass.description}</div>
      <Section
        titleClass="bg-base-100 text-primary text-2xl border-t border-primary/50"
        title="Abilities"
      >
        {isAdmin && (
          <AddAbilityDialog
            charClassId={charClass.id}
            onComplete={props.invalidate}
          />
        )}
        <div className="flex flex-row gap-2 px-2">
          {charClass.abilities
            .sort((a, b) => (a.level > b.level ? 1 : -1))
            .map((a) => (
              <button
                className={twMerge(
                  'btn btn-sm text-xs',
                  ability && ability.id === a.id
                    ? 'btn-primary'
                    : 'btn-secondary'
                )}
                onClick={() => setAbility(a)}
              >
                {a.name}
              </button>
            ))}
          <button
            className={twMerge('btn btn-sm btn-circle text-xs', 'btn-info')}
            onClick={() => setAbility(undefined)}
          >
            x
          </button>
        </div>
        {ability ? (
          <AbilityCard ability={ability} />
        ) : (
          charClass.abilities
            .sort((a, b) => (a.level > b.level ? 1 : -1))
            .map((ability) => (
              <AbilityCard
                className="bg-neutral/20 odd:bg-neutral/30 m-2"
                ability={ability}
                key={ability.id}
              />
            ))
        )}
      </Section>
      {(isAdmin || isDM) && (
        <Section
          titleClass="bg-base-100 text-primary text-2xl border-t border-primary/50"
          title={`Characters (${charClass.characters.length})`}
        >
          {charClass.characters?.map((char) => (
            <CharacterStubCard character={char} />
          ))}
        </Section>
      )}
    </div>
  )
}

export default CharClassDetailView
