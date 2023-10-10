import {Card, CardContent, CardFooter, CardTitle} from 'components/ui/Card'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {CharacterStub} from 'prisma/types'
import React from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type Props = classNameProps & {
  character:  CharacterStub
  onClick?:   () => void
  link?:      boolean
}

const CharacterCard = ({character, ...props}:Props) => {
  const router = useRouter()

  const go = (char: string) => {
    if (!props.link) return
    router.push(`/character/${char}`)
  }

  return (
    <Card
      {...props}
      onClick={() =>
        props.link ? go(character.id) : props.onClick ? props.onClick() : {}
      }
      className={twMerge(
        'bg-neutral/50 odd:bg-neutral/30',
        props.link !== undefined
          ? 'hover:bg-neutral transition-colors duration-200 cursor-pointer'
          : ''
      )}
    >
      <CardTitle>{character.name}</CardTitle>
      <CardContent>
        <div className="font-semibold">{character.charClass?.name}</div>
      </CardContent>
      <CardFooter>
        <Link href={`/character/${character.id}`}>View</Link>
      </CardFooter>
    </Card>
  )
}

export default CharacterCard