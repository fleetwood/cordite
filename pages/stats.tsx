
import StatView from "components/containers/Stat/statView"
import PageLayout from "components/ui/layouts/Page"
import Section from "components/ui/section"
import Ital from "components/ui/typography/ital"
import Typography from "components/ui/typography/typography"
import {userContext} from "context/UserContext"
import useRocketQuery from "hooks/useRocketQuery"
import {Stat} from "prisma/context"

const Page = () => {
  const { user, isLoading} = userContext()

  return (
    <PageLayout title="Stats">
      <Typography className="px-4 bg-neutral/20">
        <p>
          My system uses a similar stat system to 5e DnD, with some alterations;
          the stats are{' '}
          <Ital>
            Physique, Finesse, Wit, Intuition, Fortitude, and Charisma.
          </Ital>
        </p>
        <p>
          Stats scale very simply: 0 is a +0 modifier, and your modifier for a
          stat is simply its integer value; if your Fortitude stat is 2, then
          your FOR modifier is +2. Conversely, if it is -2, then its modifier is
          -2.
        </p>
        <p>
          The caps (outside of prestige levels) for players stats are +5, and
          cannot go below -2. You cannot raise a stat to +5 until level 5, and
          you cannot raise a second stat to +5 until level 9.
        </p>
      </Typography>
      <StatView physicalStats />
      <Section
        title="Casting Stats"
        titleClass="mt-5 text-secondary text-xl bg-neutral/20 shadow shadow-black"
      >
        <Typography>
          <p>
            Also included are specific stats for casting. My system and setting
            has its own magic system, which is channeling the elements that life
            energy is composed of: earth, fire, water, air, life, light, and
            spacetime. Each element has its own corresponding stat, which scales
            from 0 upward, and your modifier for that element is determined like
            any other stat mod.
          </p>
          <p>
            Your stat for an element determines not just your modifier for that
            element, but also your capability to channel that element at all; a
            stat of 0 means you cannot cast that element, whereas a stat of 5
            means your abilities are some of the greatest on the planet.{' '}
          </p>
          <p>
            A level 1 character cannot have a casting stat higher than 1.
            Tentatively, you cannot have more than two casting stats greater
            than 0. Casting stats may only be increased every odd level.
          </p>
        </Typography>
        <StatView castingStats />
      </Section>
    </PageLayout>
  )
}

export default Page
