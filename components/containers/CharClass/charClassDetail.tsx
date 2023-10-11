import Section from 'components/ui/section'
import {CharClassDetail} from 'prisma/context'
import React from 'react'
import {classNameProps} from 'types'
import CharacterCard from '../Character/characterCard'
import {userContext} from 'context/UserContext'
import BackgroundImage from 'components/ui/image/backgroundImage'

type Props = classNameProps & {
  charClass: CharClassDetail
}

const CharClassDetailView = ({charClass, ...props}:Props) => {
  const {isAdmin, isDM} = userContext()
  return (
    <div className="bg-base-200/50 grid grid-cols-6 gap-4 h-full">
      <BackgroundImage
        className="xl:hidden col-span-6"
        url={`/img/charClasses/${charClass.banner}`}
        contain
      />
      <div className="col-span-6 xl:col-span-4">
        <div>{charClass.description}</div>
        <div>
          <Section
            titleClass="bg-base-100 text-primary text-2xl border-t border-primary/50"
            title="Abilities"
          >
            {charClass.abilities.map((ability) => (
              <div>{ability.name}</div>
            ))}
          </Section>
        </div>
        {(isAdmin || isDM) && (
          <div>
            <Section
              titleClass="bg-base-100 text-primary text-2xl border-t border-primary/50"
              title={`Characters (${charClass.characters.length})`}
            >
              {charClass.characters?.map((char) => (
                <CharacterCard character={char} />
              ))}
            </Section>
          </div>
        )}
      </div>
      <BackgroundImage
        className="hidden xl:inline col-span-2"
        url={`/img/charClasses/${charClass.name.toLowerCase()}-side.png`}
        cover
      />
    </div>
  )
}

export default CharClassDetailView