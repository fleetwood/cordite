import {Card, CardContent, CardTitle} from 'components/ui/Card'
import {Skill, StatStub} from 'prisma/context'
import React from 'react'

type Props = {
  statStub: StatStub
}

const StatStubView = ({statStub}:Props) => {
  return (
    <Card className='bg-base-100/20 odd:bg-base-100/30'>
      <CardTitle className='bg-base-200/50 border-t border-primary/50 p-4 text-lg text-secondary'>{statStub.name}</CardTitle>
      <CardContent>
        <div className='grid grid-flow-col'></div>
        {statStub.skills && statStub.skills.map((skill:Skill) => (
          <div>{skill.name}</div>
        ))}
      </CardContent>
    </Card>
  )
}

export default StatStubView