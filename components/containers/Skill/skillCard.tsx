
import {Card,CardContent,CardTitle} from 'components/ui/Card'
import {Skill, Stat} from 'prisma/context'
import {twMerge} from 'tailwind-merge'
import {classNameProps} from 'types'

type SkillCardProps = classNameProps & {
  onClick?: () => void
  skill: Skill
  noContent?: boolean
}

const SkillCard = ({ skill, ...props }: SkillCardProps) => {
  return (
    <Card className="bg-neutral/20 odd:bg-neutral/30 group">
      <CardTitle className="text-primary group-odd:text-secondary">
        {skill.name}
      </CardTitle>
      {props.noContent === undefined && (
        <CardContent>{skill.description}</CardContent>
      )}
    </Card>
  )
}

export default SkillCard
