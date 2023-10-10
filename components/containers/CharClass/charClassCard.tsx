import {Card,CardContent,CardTitle} from 'components/ui/Card'
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

  return <Card className={twMerge(
    isLink ? 'cursor-pointer hover:bg-neutral' : '',
    props.className
  )}
    onClick={() => isLink ? go() : {}}
  >
    <CardTitle>{charClass.parentClass && <Semibold>{charClass.parentClass.name}: </Semibold> }{charClass.name}</CardTitle>
    <CardContent>
      <div>
        {charClass.description}
      </div>
      <div>
        Characters: {charClass._count.characters}
      </div>
    </CardContent>
  </Card>
}
