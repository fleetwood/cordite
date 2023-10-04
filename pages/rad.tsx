import PageLayout from 'components/ui/layouts/Page'
import Semibold from 'components/ui/typography/semibold'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'

const Page = () => {
  const { data: user, isLoading } = userContext()

  return (
    <PageLayout title="RAD">
      <Typography className="px-4 bg-neutral/20">
        <p>
          RAD is a fundamental mechanic of CORDITE, which includes maneuvers
          inspired by 5e, but is a larger concept in scope and application than
          just maneuvers, whose specific mechanics will be detailed later.
        </p>
        <p>
          A RAD is when you attempt to do something particularly brilliant or
          challenging - specifically, a Radical Action or Decision; striking a
          foe and knocking them off their feet, a sudden burst of speed at the
          last second, a deliberate and wry comment to sway a political foe to
          your side, pulling on your investigative abilities to piece together
          an obscure clue, and so on. When making a RAD roll, you roll a RAD die
          and add it to the roll.
        </p>
        <p>
          Mechanically, RAD exists to provide a way for a player to be rewarded
          for a particularly clever and in-character approach to a problem. RAD
          dice are all D8s, and your pool of RAD dice is determined by your
          stats. What distinguishes a RAD from a regular roll or action is the
          clever or creative nature in which it's executed; a player may be
          offered the choice to perform an action as a RAD after describing a
          creative approach to the action, or may request to perform a RAD and
          explain the details of their approach.
        </p>
        <p>
          A RAD will often be an action that is intended to produce multiple
          effects, and as such may involve multiple rolls in response to it; the
          only roll that applies the RAD die is the action itself. When
          following the chain of events the RAD creates, keep in mind that the
          point of a RAD is not necessarily the bonus to the roll, but to reward
          a player for smart thinking and good roleplaying. The roll helps of
          course, but the grander point is to provide a system for which DMs can
          reward their players for their creativity.
        </p>
        <p>
          <Semibold>RAD Save DC</Semibold>= 8 + (2 x stat modifier from RAD
          roll)
        </p>
        <p>
          All RAD dice are d8s, and characters have infinite RAD dice. Your
          minimum RAD die roll is your stat modifier for the RAD.
        </p>
      </Typography>
    </PageLayout>
  )
}

export default Page
