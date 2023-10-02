import {CastExpression} from '@prisma/client'
import {Card,CardContent,CardTitle} from 'components/ui/Card'
import {classNameProps} from 'types'

type CastExpCardProps = classNameProps & {
  onClick?: () => void
  exp: CastExpression
  noContent?: boolean
}

const CastExpCard = ({exp, ...props}:CastExpCardProps) => {
  return (
    <Card className='bg-neutral/20 odd:bg-neutral/30'>
      <CardTitle>{exp.name}</CardTitle>
      {props.noContent === undefined &&
        <CardContent>{exp.description}</CardContent>
      }
    </Card>
  )
}

export default CastExpCard