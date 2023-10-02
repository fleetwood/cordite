import {useState} from "react"

import Layout from "components/Layout"
import {MenuItem} from "components/containers/leftMenu/menuItemLink"
import {userContext} from "context/UserContext"
import {twMerge} from "tailwind-merge"
import StatSection from "components/containers/Stat/statSection"
import CastingSection from "components/containers/Casting/castingSection"
import Ital from "components/ui/typography/ital"
import Typography from "components/ui/typography/typography"
import Section from "components/ui/section"

const HomePage = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      <div className="p-4 flex flex-col gap-4">
        <Section title="Stats" titleClass="text-secondary">
          <Typography className="col-span-2 px-4 bg-neutral/20">
            <p>
              My system uses a similar stat system to 5e DnD, with some
              alterations; the stats are{' '}
              <Ital>
                Physique, Finesse, Wit, Intuition, Fortitude, and Charisma.
              </Ital>
            </p>
            <p>
              Stats scale very simply: 0 is a +0 modifier, and your modifier for
              a stat is simply its integer value; if your Fortitude stat is 2,
              then your FOR modifier is +2. Conversely, if it is -2, then its
              modifier is -2.
            </p>
            <p>
              The caps (outside of prestige levels) for players stats are +5,
              and cannot go below -2. You cannot raise a stat to +5 until level
              5, and you cannot raise a second stat to +5 until level 9.
            </p>
          </Typography>
        </Section>
        <StatSection />
        <CastingSection />
      </div>
    </Layout>
  )
}

export default HomePage
