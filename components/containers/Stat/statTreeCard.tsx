import {StatTree} from '@prisma/client'
import {Card,CardContent,CardProps,CardTitle} from 'components/ui/Card'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type StatTreeCardProps = classNameProps & {
  onClick?: () => void
  statTree: StatTree
  noContent?: boolean
}

const StatTreeCard = ({statTree, ...props}:StatTreeCardProps) => {
  return (
    <Card className={twMerge('bg-neutral/20 odd:bg-neutral/30', props.className)}>
      <CardTitle>{statTree.name}</CardTitle>
      {props.noContent === undefined && (
        <CardContent>{statTree.description}</CardContent>
      )}
    </Card>
  )
}

export default StatTreeCard