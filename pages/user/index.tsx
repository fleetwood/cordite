import UserProfile from 'components/containers/User/UserProfile'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import {userContext} from 'context/UserContext'
import useDebug from 'hooks/useDebug'
import {DEBUG} from 'utils/helpers'

const {debug} = useDebug('pages/user/index', DEBUG)

const Page = () => {
  const {user} = userContext()
  
  return (
    <PageLayout title="Profile" dark>
      <Section className="bg-neutral/30 mb-4">
        {user &&
          <UserProfile slug={user.slug ?? user.name} />
        }
      </Section>
    </PageLayout>
  )
}

export default Page