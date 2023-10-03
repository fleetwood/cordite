
import Layout from "components/Layout"
import useAuth from "hooks/useAuth"

const HomePage = () => {
  const {me, isLoading} = useAuth()

  return (
    <Layout>
      Home
    </Layout>
  )
}

export default HomePage
