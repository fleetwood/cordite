import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import {userContext} from 'context/UserContext'
import {classNameProps} from 'types'
import StatView from '../Stat/statView'
import SkillView from './skillView'

const SkillSection = (props: classNameProps) => {
  const { user, isLoading } = userContext()

  return (
    <Section className="mt-4 flex flex-col gap-4">
      {isLoading && <Spinner />}
      <StatView className="border-t border-secondary/50 " />
      <SkillView className="bg-neutral/30 py-4" />
    </Section>
  )
}

export default SkillSection
