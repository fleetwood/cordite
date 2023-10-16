import {Card,CardContent} from 'components/ui/Card'
import BackgroundImage from 'components/ui/image/backgroundImage'
import {useRouter} from 'next/router'
import {CharacterStub} from 'prisma/types'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'
import {cloudinary} from 'utils/cloudinary'

type Props = classNameProps & {
  character:  CharacterStub
  onClick?:   () => void
  link?:      boolean
}

const CharacterStubCard = ({character, ...props}:Props) => {
  const router = useRouter()

  const go = (char: string) => {
    if (!props.link) return
    router.push(`/character/${char}`)
  }

  return (
    <Card
      onClick={() =>
        props.link ? go(character.id) : props.onClick ? props.onClick() : {}
      }
      className={twMerge(
        'bg-base-100/50 odd:bg-base-100/30',
        'border border-neutral/50',
        'transition-colors duration-200 ',
        (props.link !== undefined || props.onClick !== undefined)
          ? 'hover:bg-black/80 cursor-pointer'
          : '',
        props.className
      )}
    >
      <CardContent className="grid grid-cols-2 min-h-[80px]">
        {character.avatar && (
          <BackgroundImage
            className="col-span-2 md:col-span-1 min-h-[120px]"
            url={cloudinary.avatar(character.avatar, 'md')}
            contain
          />
        )}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-primary">{character.name}</h3>
          <div className="font-semibold">Level {character.level}</div>
          <div className="font-semibold">{character.charClass?.name}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CharacterStubCard