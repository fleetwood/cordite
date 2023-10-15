import PageLayout from 'components/ui/layouts/Page'
import Typography from 'components/ui/typography/typography'
import { userContext } from 'context/UserContext'

const Page = () => {
  const { user, isLoading } = userContext()

  return (
    <PageLayout title="Levels" randomSide>
      <Typography className="px-4 bg-neutral/20">
        <p>
          There are 9 base levels, with an additional 4 prestige levels,
          totaling to 13 levels. Experience points are completely removed, in
          favor of milestone leveling.
        </p>
        <p>
          Scaling in th system was built with a few landmarks in mind. At level
          5, a player will have the core mechanics and toolkit of their class
          available to use and feel like they are well equipped to take on a
          challenging quest for a competent party. A level 9 player is a master
          of their craft and a well-respected figure, with a sort of "1.5"
          version of what their class was at level 5, with enhanced features and
          functionality, but not a god-killing beast.
        </p>
        <p>
          A long campaign does not necessarily have to end in a duel with
          godlike figures, but for those that do, prestige levels exist to allow
          that tier of play. Each prestige level is a significant power spike in
          its own right with powerful effects or abilities; think of level 13
          (aka prestige 4) as the closest equivalent to 5e's level 20. Prestige
          level class features are strong, but designed to be more like bonuses
          on top of what a class already has; no class should feel incomplete
          without its prestige levels.
        </p>
        <p>
          Most campaigns should set level 9 as a target for end-game content to
          be played at, excepting those with extreme challenges and power
          levels. Campaigns can spend some time at level 9, as the classes are
          designed to feel thorough and rewarding at this level. The skill tree
          system (mentioned shortly) can also be used to provide additional
          progression even after levelups are no longer a factor.
        </p>
        <p>1 stat point is awarded at every level above 1.</p>
      </Typography>
    </PageLayout>
  )
}

export default Page
