import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import {userContext} from 'context/UserContext'
import {classNameProps} from 'types'
import CastTreeView from './castTreeView'
import CastExpView from './castExpView'

const CastingSection = (props: classNameProps) => {
  const { data: user, isLoading } = userContext()


  return (
    <Section className='mt-4 flex flex-col gap-4'>
      {isLoading && <Spinner />}
      <CastTreeView className="border-t border-secondary/50 " />
      <CastExpView className="bg-neutral/30 py-4" />
    </Section>
  )
}

export default CastingSection
