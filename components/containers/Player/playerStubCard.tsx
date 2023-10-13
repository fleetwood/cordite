import {Card,CardTitle,CardContent} from 'components/ui/Card'
import {CharacterStub, UserStub} from 'prisma/types'
import React from 'react'
import CharacterCard from '../Character/characterCard'
import {useRouter} from 'next/router'
import {twMerge} from 'tailwind-merge'

type Props = {
  player: UserStub
  link?:  boolean
}

const PlayerStubCard = ({player, ...props}:Props) => {
  const router = useRouter()

  const go = (char:string) => {
    if (!props.link) return
    router.push(`/character/${char}`)
  }

  return (
    <Card key={player.id} className="bg-neutral odd:bg-neutral/30">
      <CardTitle>{player.name}</CardTitle>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {player.characters.map((char) => (
            <CharacterCard
              className={twMerge(
                "bg-neutral/50 odd:bg-neutral/30",
                props.link !== undefined 
                  ? 'hover:bg-neutral transition-colors duration-200 cursor-pointer' 
                  : ''
              )}
              key={char.id}
              character={char}
              onClick={() => go(char.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PlayerStubCard