import {Card, CardContent, CardTitle} from 'components/ui/Card'
import {Skill, StatStub} from 'prisma/context'
import React from 'react'
import SkillCard from '../Skill/skillCard'

type Props = {
  statStub: StatStub
}

const StatStubView = ({statStub}:Props) => {
  return (
    <Card className='bg-base-100/20 odd:bg-base-100/30'>
      <CardTitle className='bg-base-200/50 border-t border-primary/50 p-4 text-lg text-secondary'>{statStub.name}</CardTitle>
      <CardContent>
        <div className='grid grid-cols-3 gap-2'>
        {statStub.skills && statStub.skills.map((skill:Skill) => (
          <SkillCard skill={skill} key={skill.id} />
        ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default StatStubView