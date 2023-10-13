import {Card, CardContent, CardTitle} from 'components/ui/Card'
import Divider from 'components/ui/divider'
import HtmlContent from 'components/ui/htmlContent'
import {Ability} from 'prisma/context'
import React from 'react'
import {classNameProps} from 'types'

type Props = classNameProps & {
  ability: Ability
}

const AbilityCard = ({ability, ...props}:Props) => {
  return (
    <Card className={props.className}>
      <CardTitle>{ability.name}</CardTitle>
      <CardContent>
        {ability.level > 0 && <div className='italic'>Level {ability.level} Ability</div>}
        <Divider variant='neutral' className='opacity-20' />
        <HtmlContent content={ability.description} />
      </CardContent>
    </Card>
  )
}

export default AbilityCard