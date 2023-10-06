import PageLayout from 'components/ui/layouts/Page'
import Semibold from 'components/ui/typography/semibold'
import Typography from 'components/ui/typography/typography'
import { userContext } from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {StatStub} from 'prisma/context'

const Page = () => {
  const { user, isLoading } = userContext()

  const {
    data: stats, 
    isLoading: statsLoading,
    error: statsError,
    invalidate: invalidateStats
  } = useRocketQuery<StatStub[]>({
    name: 'stat-stubs',
    url: 'stat/stub'
  })

  return (
    <PageLayout title="Skills">
      <Typography className="px-4 bg-neutral/20">
        <p>
          On character creation, you may choose proficiency in 2 skills. Your
          subclass will provide you an additional 2 from a list specific to that
          subclass. Information skills by default use your Intuition modifier,
          but are counted separately from the other skills and will be explained
          later.
        </p>
        <p>
          <Semibold>Why do some skills seem to overlap with others?</Semibold>
        </p>
        <p>
          This is intentional: a problem can often be solved in multiple
          different ways, and there are often multiple ways of reaching the same
          conclusion; your character will approach them in the ways they are
          most familiar with - their proficiencies!
        </p>
      </Typography>
      
      {/* {stats && stats.map((statStub:StatStub) => (
        <div key={statStub.id}>{statStub.name}</div>
      ))} */}
    </PageLayout>
  )
}

export default Page
