import {Card, CardContent, CardFooter, CardTitle} from 'components/ui/Card'
import Link from 'next/link'
import {CharacterStub} from 'prisma/types'
import React from 'react'
import {classNameProps} from 'types'

type Props = classNameProps & {
  character:  CharacterStub
  onClick?:   () => void
}

const characterCard = ({character, ...props}:Props) => {
  return (
    <Card {...props} onClick={props.onClick}>
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

export default characterCard