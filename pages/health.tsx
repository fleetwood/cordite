import PageLayout from 'components/ui/layouts/Page'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'

const Page = () => {
  const { user, isLoading } = userContext()

  return (
    <PageLayout
      title="Health"
      randomSide
      breadcrumbs={[{ label: 'Health' }]}
    >
      <Typography className="px-4 bg-neutral/20">
        <p>
          Hit points are called Will in my system. Taking damage is not just
          physical injury; it is primarily your will to fight eroding through
          the stress of combat.
        </p>
      </Typography>
    </PageLayout>
  )
}

export default Page
