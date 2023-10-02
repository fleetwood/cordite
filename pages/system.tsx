
import Layout from "components/Layout"
import Section from "components/ui/section"
import {userContext} from "context/UserContext"

const HomePage = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      <Section
        title="Core System"
        titleClass="text-secondary"
      >
        Cordite originated as a fork of 5th Edition DnD (and some inspiration
        from other systems), and while it has long since deviated enough to be
        considered its own system, its lineage is evident. This would not exist
        without WotC's base platform providing the shoulders for me, and so many
        others, to stand on. nor without the help of many people in my life,
        primarily my wonderful beans, who have accompanied me every single step
        of the way. I love you so much beans. &lt;3
      </Section>
    </Layout>
  )
}

export default HomePage
