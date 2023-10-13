
import PageLayout from "components/ui/layouts/Page"
import Section from "components/ui/section"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"

const Page = () => {
  const { user, isLoading} = userContext()

  return (
    <PageLayout title="Equipment" randomBanner randomSide>
      <Section>
        <Typography className="px-4 bg-neutral h-fit">
          <p>Equipments!</p>
        </Typography>
      </Section>
    </PageLayout>
  )
}

export default Page
