
import Layout from "components/Layout"
import Section from "components/ui/section"
import {userContext} from "context/UserContext"

const HomePage = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      <Section
        className="w-full h-full bg-cover"
        title="Health"
        titleClass="text-secondary"
      >
        <p>
          Hit points are called Will in my system. Taking damage is not just
          physical injury; it is primarily your will to fight eroding through
          the stress of combat.
        </p>
      </Section>
    </Layout>
  )
}

export default HomePage
