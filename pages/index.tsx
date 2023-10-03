
import Layout from "components/Layout"
import Typography from "components/ui/typography/typography"
import useAuth from "hooks/useAuth"

const HomePage = () => {
  const {me, isLoading} = useAuth()

  return (
    <Layout>
      <div className="min-h-full text-center bg-cover hero"
          style={{
            backgroundImage: 'url(img/clockwork.jpg)',
          }}
        >
        <div className="hero-content p-20 w-3/4 bg-base-100/90 flex flex-col">
          <h1 className="text-9xl font-semibold font-fraunces text-primary text-shadow shadow-black">
            CORDITE
          </h1>
          <Typography className="text-xl text-primary">
            tabletop role-playing game system
          </Typography>
          <Typography className="mt-10">by madeleine & friends</Typography>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
