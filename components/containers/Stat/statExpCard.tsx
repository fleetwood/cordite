import { StatExpression, StatTree } from '@prisma/client'
import { Card, CardContent, CardProps, CardTitle } from 'components/ui/Card'
import { classNameProps } from 'types'

type StatTreeCardProps = classNameProps & {
  onClick?: () => void
  statExp: StatExpression
  noContent?: boolean
}

const StatExpCard = ({ statExp, ...props }: StatTreeCardProps) => {
  return (
    <Card className="bg-neutral/20 odd:bg-neutral/30 group">
      <CardTitle className="text-primary group-odd:text-secondary">
        {statExp.name}
      </CardTitle>
      {props.noContent === undefined && (
        <CardContent>{statExp.description}</CardContent>
      )}
    </Card>
  )
}

export default StatExpCard
