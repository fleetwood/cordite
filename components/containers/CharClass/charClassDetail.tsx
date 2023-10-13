import Section from 'components/ui/section'
import {userContext} from 'context/UserContext'
import {CharClassDetail} from 'prisma/context'
import {classNameProps} from 'types'
import CharacterCard from '../Character/characterCard'
import AddAbilityDialog from './charClassAddAbility'

type Props = classNameProps & {
  charClass: CharClassDetail
  invalidate: () => void
}

const CharClassDetailView = ({ charClass, ...props }: Props) => {
  const { isAdmin, isDM } = userContext()

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
        {charClass.abilities.map((ability) => (
          <div>{ability.name}</div>
        ))}
      </Section>
      {(isAdmin || isDM) && (
        <Section
          titleClass="bg-base-100 text-primary text-2xl border-t border-primary/50"
          title={`Characters (${charClass.characters.length})`}
        >
          {charClass.characters?.map((char) => (
            <CharacterCard character={char} />
          ))}
        </Section>
      )}
    </div>
  )
}

export default CharClassDetailView
