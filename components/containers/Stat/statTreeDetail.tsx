import Spinner from 'components/ui/spinner'
import Ital from 'components/ui/typography/ital'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {StatExpression,StatTree} from 'prisma/context'
import {uuid} from 'utils/helpers'
import StatExpCard from './statExpCard'
import Typography from 'components/ui/typography/typography'

type StatTreeDetail = StatTree & {
  exps: StatExpression[]
}

type StatTreeDetailProps = {
  id: string
}

const StatTreeDetailView = ({id, ...props}:StatTreeDetailProps) => {
  const { data: user, isLoading } = userContext()
  const {
    data: statTree,
    isLoading: statLoading,
    error,
  } = useRocketQuery<StatTreeDetail>({ name: `stat-tree-detail-${id}`, url: `stat/exp/${id}` })

  return (
    <>
      <div className="grid grid-flow-col relative">
        <h3>{statTree.name}</h3>
        <Typography>{statTree.description}</Typography>
        {user && (
        <Ital>TODO: Add EDIT view</Ital>
        )}
      </div>
      {statLoading && <Spinner />}
      {statTree && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-evenly">
          {statTree.exps
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((s: StatExpression, i: number) => (
              <StatExpCard statExp={s} key={uuid()} />
            ))}
        </div>
      )}
    </>
  )
}

export default StatTreeDetailView