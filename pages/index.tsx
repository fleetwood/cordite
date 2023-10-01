import {GetStaticProps} from "next"
import {useState} from "react"

import Layout from "components/Layout"
import HomeSection from "components/containers/Home/home"
import VmenuLink from "components/ui/links/VerticalMenuLink"
import Section from "components/ui/section"
import {userContext} from "context/UserContext"
import {twMerge} from "tailwind-merge"
import StatSection from "components/containers/Stat/statSection"
import CastingSection from "components/containers/Casting/castingSection"

export const getStaticProps: GetStaticProps = async () => {
  return {props:{}}
}

type Props = {
  // feed: PostProps[]
}

const HomePage = (props) => {
  const {data: user, isLoading} = userContext()
  const [activeSection, setActiveSection] = useState(-1)
  const activeClass = (i:number) => twMerge('absolute transition-all duration-200 ease-out', i === activeSection ? 'opacity-100 scale-y-100 z-1' : 'opacity-0 scale-y-0 z-0')

  return (
    <Layout>
      <main className="grid grid-cols-5 min-h-screen">
        <div className="col-span-1 flex flex-col pr-4 text-xl bg-gradient-to-b from-base-200 to-base-100">
          <VmenuLink className="text-right" onClick={() => setActiveSection(0)}>
            Character Expression
          </VmenuLink>
          <VmenuLink className="text-right" onClick={() => setActiveSection(1)}>
            Stat Tree
          </VmenuLink>
          <VmenuLink className="text-right" onClick={() => setActiveSection(2)}>
            Casting Tree
          </VmenuLink>
        </div>
        <div className="col-span-4 relative p-4">
          <Section 
            className={twMerge('w-full h-full bg-cover bg-opacity-20',activeClass(-1))}
            backgroundImage="img/cd0.jpeg"
          >
            <h2 className="mt-4 text-secondary text-shadow-lg shadow-black">
              CHARACTER EXPRESSION TREES
            </h2>
            <p className="text-glow glow-success">
              for the tabletop role-playing game system by{' '}
              <span className="font-semibold text-success">
                madeleine & friends
              </span>
            </p>
          </Section>
          <HomeSection className={activeClass(0)} />
          <StatSection className={activeClass(1)} />
          <CastingSection className={activeClass(2)} />
        </div>
        {/* {props.feed.map((post) => (
          <div key={post.id} className="post">
            <Post post={post} />
          </div>
        ))} */}
      </main>
    </Layout>
  )
}

export default HomePage
