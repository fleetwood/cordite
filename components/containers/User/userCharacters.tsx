import Section from 'components/ui/section'
import useRocketQuery from 'hooks/useRocketQuery'
import React from 'react'
import CharacterCard from '../Character/characterCard'
import {CharacterStub, User} from 'prisma/context'
import Spinner from 'components/ui/spinner'

type Props = {
  user:   User
}

const UserCharacters = ({user, ...props}:Props) => {

  const {data: characters, isLoading, invalidate} = useRocketQuery<CharacterStub[]>({
    name: 'user-characters',
    url: `user/${user.slug}/characters`
  })
  
  return isLoading ? <Spinner />
    : characters && characters.length > 0 ?
    <Section className='bg-base-100'>
      <div className="grid grid-cols-3 gap-2">
        {characters.map((c) => <CharacterCard character={c} link />)}
      </div>
    </Section>
    : 
    <Section className='bg-base-100'>
      <p className='px-4 font-semibold text-warning'>No characters yet!</p>
    </Section>
}

export default UserCharacters