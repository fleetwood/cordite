import Layout from "components/Layout"
import Section from "components/ui/section"
import Semibold from "components/ui/typography/semibold"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"

const Page = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      <Section
        title="Ranged Weapons"
        titleClass="text-secondary shadow-md shadow-black px-4"
        className="p-4"
      >
        <Typography>
          It's the <Semibold>.88</Semibold> Magnum. They made it for him
          special.
        </Typography>
      </Section>
    </Layout>
  )
}

export default Page
