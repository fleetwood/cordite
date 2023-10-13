import {Card,CardContent,CardTitle} from 'components/ui/Card'
import Divider from 'components/ui/divider'
import Avatar from 'components/ui/image/avatar'
import BackgroundImage from 'components/ui/image/backgroundImage'
import Semibold from 'components/ui/typography/semibold'
import {useRouter} from 'next/router'
import {CharClassStub} from 'prisma/types'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type Props = classNameProps & {
  charClass:  CharClassStub
  link?:      boolean
}

export const CharClassCard = ({charClass, ...props}:Props) => {
  const router = useRouter()
  const isLink = props.link && props.link === true

  const go = () => {
    if (!isLink) {
      return
    }
    router.push(`/classes/${charClass.name.toLowerCase()}`)
  }

  return (
    <Card
      className={twMerge(
        isLink ? 'cursor-pointer hover:bg-neutral' : '',
        props.className
      )}
      onClick={() => (isLink ? go() : {})}
    >
      <CardTitle>
        {charClass.parentClass && (
          <Semibold>{charClass.parentClass.name}: </Semibold>
        )}
        {charClass.name}
      </CardTitle>
      <CardContent>
        <div className="grid grid-cols-3">
          <div className="col-span-3 xl:col-span-1">
            <Avatar src={`/img/av/${charClass.avatar}`} size="lg" />
          </div>
          <div className="col-span-3 xl:col-span-2">
            <div>{charClass.description}</div>
            <div>Characters: {charClass._count.characters}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
