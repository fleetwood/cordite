
import Layout from "components/Layout"
import Section from "components/ui/section"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"

const Page = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      <Section
        title="Health"
        titleClass="text-secondary shadow-md shadow-black px-4"
        className="p-4"
      >
        <Typography>
        <p>
          Hit points are called Will in my system. Taking damage is not just
          physical injury; it is primarily your will to fight eroding through
          the stress of combat.
        </p>
        </Typography>
      </Section>
    </Layout>
  )
}

export default Page
