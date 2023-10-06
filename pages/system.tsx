import PageLayout from 'components/ui/layouts/Page'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'

const Page = () => {
  const { user, isLoading } = userContext()

  return (
    <PageLayout title="Core System">
      <Typography className="px-4 bg-neutral/20">
        Cordite originated as a fork of 5th Edition DnD (and some inspiration
        from other systems), and while it has long since deviated enough to be
        considered its own system, its lineage is evident. This would not exist
        without WotC's base platform providing the shoulders for me, and so many
        others, to stand on. nor without the help of many people in my life,
        primarily my wonderful beans, who have accompanied me every single step
        of the way. I love you so much beans. &lt;3
      </Typography>
    </PageLayout>
  )
}

export default Page
