
import {Card,CardContent,CardTitle} from 'components/ui/Card'
import Ital from 'components/ui/typography/ital'
import {Skill, CharSkillStub} from 'prisma/context'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type SkillCardProps = classNameProps & {
  onClick?: () => void
  skill: CharSkillStub
  noDescription?: boolean
}

const SkillStubCard = ({ skill, ...props }: SkillCardProps) => {
  return (
    <Card
      className={twMerge(
        'bg-neutral/20 odd:bg-neutral/30 group',
        props.className
      )}
    >
      <CardContent className="flex gap-2 items-center">
        <h3 className="text-lg">{skill.skill.name}</h3>
        <Ital>Level {skill.level}</Ital>
      </CardContent>
      {props.noDescription === undefined && (
        <CardContent>{skill.skill.description}</CardContent>
      )}
    </Card>
  )
}

export default SkillStubCard
