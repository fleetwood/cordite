
import PageLayout from "components/ui/layouts/Page"
import Section from "components/ui/section"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"

const Page = () => {
  const {data: user, isLoading} = userContext()

  return (
    <PageLayout title="Equipment">
      <Typography className="col-span-3 lg:col-span-2 px-4 bg-neutral h-fit">
        <p>Equipments!</p>
      </Typography>
      <Section
        className="hidden lg:inline col-span-1 h-full opacity-50"
        backgroundImage="/img/characters.jpg"
      >
        {' '}
      </Section>
    </PageLayout>
  )
}

export default Page
