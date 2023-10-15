import {Stat} from '@prisma/client'
import {Card,CardContent,CardTitle} from 'components/ui/Card'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type StatTreeCardProps = classNameProps & {
  onClick?: () => void
  stat: Stat
  noContent?: boolean
}

const StatCard = ({stat, ...props}:StatTreeCardProps) => {
  return (
    <Card className="bg-neutral/20 odd:bg-neutral/30 group">
      <CardTitle className={twMerge('text-lg text-primary group-odd:text-secondary', stat.cast ?  'italic' : '')}>
        {stat.name}
      </CardTitle>
      {props.noContent === undefined && (
        <CardContent>{stat.description}</CardContent>
      )}
    </Card>
  )
}

export default StatCard