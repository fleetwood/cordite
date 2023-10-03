import Layout from "components/Layout"
import {userContext} from "context/UserContext"

const HomePage = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      Ranged Weapons
    </Layout>
  )
}

export default HomePage
