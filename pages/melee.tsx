import PageLayout from "components/ui/layouts/Page"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"

const Page = () => {
  const { user, isLoading} = userContext()

  return (
    <PageLayout title="Melee">
      <Typography className="px-4 bg-neutral/20">
        I'll smash it with a HAMMAH!
      </Typography>
    </PageLayout>
  )
}

export default Page
