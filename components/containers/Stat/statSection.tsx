import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import {userContext} from 'context/UserContext'
import {classNameProps} from 'types'
import StatTreeView from './statTreeView'
import StatExpView from './statExpView'

const StatSection = (props:classNameProps) => {
  const {data: user, isLoading} = userContext()

  return (
    <Section className={props.className} title="Stats">
      {isLoading && <Spinner />}
      <div className='grid grid-cols-2 gap-2'>
        <StatTreeView />
        <StatExpView />
      </div>
    </Section>
  )}

export default StatSection
