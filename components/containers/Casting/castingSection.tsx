import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import {userContext} from 'context/UserContext'
import {classNameProps} from 'types'
import CastTreeView from './castTreeView'
import CastExpView from './castExpView'

const CastingSection = (props: classNameProps) => {
  const { data: user, isLoading } = userContext()


  return (
    <Section className={props.className} title="Casting">
      {(isLoading) && <Spinner />}
      <div className="grid grid-cols-2">
        <div>
          <CastTreeView />
        </div>
        <div>
          <CastExpView />
        </div>
      </div>
    </Section>
  )
}

export default CastingSection
