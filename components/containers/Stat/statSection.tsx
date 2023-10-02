import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import Ital from 'components/ui/typography/ital'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'
import {classNameProps} from 'types'
import StatExpView from './statExpView'
import StatTreeView from './statTreeView'

const StatSection = (props: classNameProps) => {
  const { data: user, isLoading } = userContext()

  return (
    <Section className="mt-4 flex flex-col gap-4">
      {isLoading && <Spinner />}
      <StatTreeView className="border-t border-secondary/50 " />
      <StatExpView className="bg-neutral/30 py-4" />
    </Section>
  )
}

export default StatSection
