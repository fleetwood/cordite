import {Card, CardContent, CardFooter, CardTitle} from 'components/ui/Card'
import BackgroundImage from 'components/ui/image/backgroundImage'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {CharacterStub} from 'prisma/types'
import React from 'react'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'
import {cloudinary} from 'utils/cloudinary'

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
        'bg-base-100/50 odd:bg-base-100/30',
        (props.link !== undefined || props.onClick !== undefined)
          ? 'hover:bg-neutral transition-colors duration-200 cursor-pointer'
          : ''
      )}
    >
      <CardContent className="grid grid-cols-2 min-h-[80px]">
        {character.avatar && <BackgroundImage url={cloudinary.avatar(character.avatar, 'md')} contain />}
        <div>
          <h3 className='text-primary'>{character.name}</h3>
          <div className="font-semibold">{character.charClass.name}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CharacterCard