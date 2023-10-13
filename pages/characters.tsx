import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Typography from 'components/ui/typography/typography'
import { userContext } from 'context/UserContext'

const Page = () => {
  const { user, isLoading } = userContext()

  return (
    <PageLayout
      title="Characters"
      bannerImage="/img/casting-banner.png"
      sideImage='img/casting-side.png'
    >
      <Section>
        <Typography className="col-span-3 lg:col-span-2 px-4 bg-neutral h-fit">
          Characters
        </Typography>
      </Section>
    </PageLayout>
  )
}

export default Page
