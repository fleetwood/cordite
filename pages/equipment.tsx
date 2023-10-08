
import PageLayout from "components/ui/layouts/Page"
import Section from "components/ui/section"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"

const Page = () => {
  const { user, isLoading} = userContext()

  return (
    <PageLayout title="Equipment">
      <div className="grid grid-cols-3">
        <Typography className="col-span-3 lg:col-span-2 px-4 bg-neutral h-fit">
          <p>Equipments!</p>
        </Typography>
        <Section
          className="hidden lg:inline col-span-1 h-full opacity-50"
          backgroundImage="/img/characters.jpg"
          >
          {' '}
        </Section>
      </div>
    </PageLayout>
  )
}

export default Page
