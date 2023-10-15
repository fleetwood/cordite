import {HeartIcon} from "components/ui/icons"
import PageLayout from "components/ui/layouts/Page"
import Transitionable from "components/ui/transitions/Transitionable"
import Typography from "components/ui/typography/typography"
import {useState} from "react"

const HomePage = () => {
  const [show, setShow] = useState(false)

  return (
    <PageLayout requireLogin={false} backgroundImage="img/clockwork.jpg">
      <div className="min-h-full min-w-full text-center items-center hero bg-base-100">
        <div
          className="hero-content 
          bg-gradient-to-t from-secondary/10 to-base-100/20 
          shadow-xl shadow-black
          lg:p-20 lg:w-3/4 bg-base-100/70
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

          <div className="relative mt-20 mb-20 w-full">
            <Transitionable
              className="absolute w-full flex place-content-center"
              show={!show}
            >
              <Typography className="flex items-center bg-base-100/50">
                by madeleine & friends
                <HeartIcon
                  className="cursor-pointer text-red-700 hover:text-success mx-2 w-8 h-8"
                  onClick={() => setShow((x) => !x)}
                />
              </Typography>
            </Transitionable>
            <Transitionable className="absolute" show={show}>
              <Typography
                className="
                bg-base-100 p-2 text-lg text-justify 
                border border-neutral 
                shadow-xl shadow-black
                "
              >
                <p>
                  Cordite originated as a fork of 5th Edition DnD (and some
                  inspiration from other systems), and while it has long since
                  deviated enough to be considered its own system, its lineage
                  is evident. This would not exist without WotC's base platform
                  providing the shoulders for me, and so many others, to stand
                  on. nor without the help of many people in my life, primarily
                  my wonderful beans, who have accompanied me every single step
                  of the way.
                </p>
                <p>I love you so much beans.</p>
                <HeartIcon
                  className="cursor-pointer text-red-700 hover:text-success w-8 h-8"
                  onClick={() => setShow((x) => !x)}
                />
              </Typography>
            </Transitionable>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default HomePage
