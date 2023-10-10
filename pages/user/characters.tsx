import UserCharacters from 'components/containers/User/userCharacters'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'

const Page = (props) => {
  const { user } = userContext()

  return (
    <PageLayout title="Characters">
      <div className="grid grid-cols-6">
        <Typography className="col-span-4 px-4 h-fit">
          {user && (
            <UserCharacters user={user} />
          )}
        </Typography>
        <Section
          className="col-span-2 h-full opacity-70 bg-contain bg-no-repeat"
          backgroundImage="/img/casting.jpg"
          >
          {' '}
        </Section>
      </div>
    </PageLayout>
  )
}

export default Page
