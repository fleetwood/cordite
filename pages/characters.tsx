
import Layout from "components/Layout"
import Section from "components/ui/section"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"

const Page = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      <Section
        title="Characters"
        titleClass="text-secondary shadow-md shadow-black px-4"
        className="p-4"
      >
        <Typography>
        Characters
        </Typography>
      </Section>
    </Layout>
  )
}

export default Page
