import PageLayout from 'components/ui/layouts/Page'
import Semibold from 'components/ui/typography/semibold'
import Typography from 'components/ui/typography/typography'
import { userContext } from 'context/UserContext'

const Page = () => {
  const { user, isLoading } = userContext()

  return (
    <PageLayout title="Ranged Weapons">
      <Typography className="px-4 bg-neutral/20">
        It's the <Semibold>.88</Semibold> Magnum. They made it for him special.
      </Typography>
    </PageLayout>
  )
}

export default Page
