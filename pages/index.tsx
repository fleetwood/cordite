import {useState} from "react"

import Layout from "components/Layout"
import CastingSection from "components/containers/Casting/castingSection"
import StatSection from "components/containers/Stat/statSection"
import VmenuLink from "components/ui/links/VerticalMenuLink"
import {userContext} from "context/UserContext"
import {twMerge} from "tailwind-merge"
import AboutSection from "components/containers/Home/aboutSection"
import CoreSystem from "components/containers/Home/coreSection"
import CharExpressions from "components/containers/Home/expSection"
import HealthSection from "components/containers/Home/healthSection"
import LevelSection from "components/containers/Home/levelsSection"
import RadSection from "components/containers/Home/radSection"

const HomePage = () => {
  const {data: user, isLoading} = userContext()
  const [activeSection, setActiveSection] = useState(-1)
  const activeClass = (i:number) => twMerge('absolute transition-all duration-200 ease-out', i === activeSection ? 'opacity-100 scale-y-100 z-1' : 'opacity-0 scale-y-0 z-0')

  const sections = [
    {
      link: 'Cordite',
      children: <AboutSection />
    },
    {
      link: 'Core',
      children: <CoreSystem />,
    },
    {
      link: 'Health',
      children: <HealthSection />,
    },
    {
      link: 'Levels',
      children: <LevelSection />,
    },
    {
      link: 'RAD',
      children: <RadSection />,
    },
    {
      link: 'Character Expression',
      children: <CharExpressions />,
    },
    {
      link: 'Stat Tree',
      children: <StatSection />,
    },
    {
      link: 'Casting Tree',
      children: <CastingSection />,
    },
  ]

  return (
    <Layout>
      <main className="grid grid-cols-5 min-h-screen">
        <div className="col-span-1 flex flex-col pr-4 text-xl bg-gradient-to-b from-base-200 to-base-100">
          {sections.map((s, i) => (
            <VmenuLink
              className="text-right"
              onClick={() => setActiveSection(i)}
              key={'menu-' + i}
            >
              {s.link}
            </VmenuLink>
          ))}
        </div>
        <div className="col-span-4 relative">
          {sections.map((s, i) => (
            <div className={twMerge('w-full h-full p-4', activeClass(i))} key={'section-' + i}>
              {s.children}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default HomePage
