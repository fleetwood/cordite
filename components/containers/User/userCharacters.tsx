import Section from 'components/ui/section'
import useRocketQuery from 'hooks/useRocketQuery'
import React from 'react'
import CharacterCard from '../Character/characterCard'
import {CharacterStub, User} from 'prisma/context'

type Props = {
  user:   User
}

const UserCharacters = ({user, ...props}:Props) => {

  const {data: characters, invalidate} = useRocketQuery<CharacterStub[]>({
    name: 'user-characters',
    url: `user/${user.slug}/characters`
  })
  
  return (
    <Section className='bg-base-100'>
      <div className="grid grid-cols-3 gap-2">
        {characters &&
          characters.map((c) => <CharacterCard character={c} link />)}
      </div>
    </Section>
  )
}

export default UserCharacters