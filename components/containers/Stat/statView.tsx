import {userContext} from 'context/UserContext'
import useDebug from 'hooks/useDebug'
import useRocketQuery from 'hooks/useRocketQuery'
import {Stat} from 'prisma/context'
import {classNameProps} from 'types'
import {uuid} from 'utils/helpers'
import StatCard from './statCard'
import {twMerge} from 'tailwind-merge'

const {debug} = useDebug('statTreeView')

type StatTreeViewProps = classNameProps & {
  physicalStats?: boolean
  castingStats?: boolean
}

const StatView = (props:StatTreeViewProps) => {
  const { user, isLoading, isAdmin } = userContext()

  const {
    data: allStats,
    isLoading: statsLoading,
    invalidate: invalidateStats,
  } = useRocketQuery<Stat[]>({
    name: 'stat-all',
    url: 'stat',
  })

  const stats = (allStats ?? [])
    .filter((s) => s.cast === (props.castingStats === true))
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  return (
    <div className={twMerge(
      "grid grid-cols-1 lg:grid-cols-3 gap-2 justify-evenly",
      props.className
      )}>
      {stats
        .map((s: Stat, i: number) => (
          <StatCard
            className="cursor-pointer border border-primary/0 hover:border-primary/50"
            stat={s}
            key={uuid()}
          />
        ))}
    </div>
  )
}

export default StatView