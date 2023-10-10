import PageLayout from "components/ui/layouts/Page"
import Typography from "components/ui/typography/typography"
import useAuth from "hooks/useAuth"

const HomePage = () => {
  const {me, isLoading} = useAuth()

  return (
    <PageLayout requireLogin={false}>
      <div
        className="min-h-full min-w-full text-center sm:bg-cover sm:hero bg-base-100"
        style={{
          backgroundImage: 'url(img/clockwork.jpg)',
          backgroundBlendMode: 'soft-light',
        }}
      >
        <div
          className="md:hero-content 
          bg-gradient-to-t from-secondary/10 to-base-100/20 
          shadow-xl shadow-black
          lg:p-20 lg:w-3/4 bg-base-100/50 
          flex flex-col lg:text-2xl"
        >
          <h1
            className="w-full mt-10
              bg-gradient-to-b from-primary/10 to-primary/30 shadow shadow-black"
          >
            <span
              className="
              text-5xl xl:text-9xl
              corditeMesh text-shadow-lg shadow-black/50
              font-semibold font-fraunces leading-relaxed"
            >
              CORDITE
            </span>
          </h1>
          <Typography className="text-primary/70">
            tabletop role-playing game system
          </Typography>
          <Typography className="mt-40 mb-20 text-base-content">
            by madeleine & friends
          </Typography>
        </div>
      </div>
    </PageLayout>
  )
}

export default HomePage
