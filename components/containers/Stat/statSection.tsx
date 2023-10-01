import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import { userContext } from 'context/UserContext'
import { classNameProps } from 'types'
import StatTreeView from './statTreeView'
import StatExpView from './statExpView'
import Typography from 'components/ui/typography/typography'
import Ital from 'components/ui/typography/ital'
import {useState,ReactNode} from 'react'

const StatSection = (props: classNameProps) => {
  const { data: user, isLoading } = userContext()
  const [viewPort, setViewPort] = useState<ReactNode>()

  return (
    <Section
      className={props.className}
      title="Stats"
      titleClass="text-secondary"
    >
      {isLoading && <Spinner />}
      <div className="grid grid-cols-2 gap-2">
        <Typography className="col-span-2 px-4 bg-neutral/20">
          <p>
            My system uses a similar stat system to 5e DnD, with some
            alterations; the stats are <Ital>Physique, Finesse, Wit, Intuition, Fortitude, and Charisma.</Ital>
          </p>
          <p>
            Stats scale very simply: 0 is a +0 modifier, and your modifier for a
            stat is simply its integer value; if your Fortitude stat is 2, then
            your FOR modifier is +2. Conversely, if it is -2, then its modifier
            is -2.
          </p>
          <p>
            The caps (outside of prestige levels) for players stats are +5, and
            cannot go below -2. You cannot raise a stat to +5 until level 5, and
            you cannot raise a second stat to +5 until level 9.
          </p>
        </Typography>
        <div className="flex flex-col">
          <StatTreeView setViewPort={setViewPort} />
          <StatExpView />
        </div>
        <div>
          {viewPort}
        </div>
      </div>
    </Section>
  )
}

export default StatSection
