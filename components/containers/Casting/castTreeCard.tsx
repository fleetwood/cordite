import { CastTree, StatExpression, StatTree } from '@prisma/client'
import { Card, CardContent, CardProps, CardTitle } from 'components/ui/Card'
import { classNameProps } from 'types'

type CastTreeCardProps = classNameProps & {
  onClick?: () => void
  tree: CastTree
  noContent?: boolean
}

const CastTreeCard = ({ tree, ...props }: CastTreeCardProps) => {
  return (
    <Card className="bg-neutral/20 odd:bg-neutral/30 group">
      <CardTitle className="text-primary group-odd:text-secondary">
        {tree.name}
      </CardTitle>
      {props.noContent === undefined && (
        <CardContent>{tree.description}</CardContent>
      )}
    </Card>
  )
}

export default CastTreeCard
