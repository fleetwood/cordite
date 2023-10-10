import UserProfile from 'components/containers/User/userProfile'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import { userContext } from 'context/UserContext'
import useDebug from 'hooks/useDebug'
import { DEBUG } from 'utils/helpers'

const { debug } = useDebug('pages/user/index')

export async function getServerSideProps(context: any) {
  const { slug } = context.params
  return { props: { slug } }
}

const Page = ({slug, ...props}) => {
  const { user, isAdmin, isPlayer } = userContext()

  return (
    <PageLayout title="Profile" dark>
      <Section className="bg-neutral/30 mb-4">
        <UserProfile slug={isAdmin ? slug : user?.slug} />
      </Section>
    </PageLayout>
  )
}

export default Page
