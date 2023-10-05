import Spinner from 'components/ui/spinner'
import Ital from 'components/ui/typography/ital'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {uuid} from 'utils/helpers'
import StatCard from '../Skill/skillCard'
import Typography from 'components/ui/typography/typography'
import {Skill, Stat} from 'prisma/context'
import SkillCard from '../Skill/skillCard'

type StatDetail = Stat & {
  skills: Skill[]
}

type StatDetailProps = {
  id: string
}

const StatTreeDetailView = ({id, ...props}:StatDetailProps) => {
  const { data: user, isLoading } = userContext()
  const {
    data: stat,
    isLoading: statLoading,
    error,
  } = useRocketQuery<StatDetail>({ name: `stat-tree-detail-${id}`, url: `stat/exp/${id}` })

  return (
    <>
      <div className="grid grid-flow-col relative">
        <h3>{stat.name}</h3>
        <Typography>{stat.description}</Typography>
        {user && (
        <Ital>TODO: Add EDIT view</Ital>
        )}
      </div>
      {statLoading && <Spinner />}
      {stat && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-evenly">
          {stat.skills
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((s: Skill, i: number) => (
              <SkillCard skill={s} key={uuid()} />
            ))}
        </div>
      )}
    </>
  )
}

export default StatTreeDetailView