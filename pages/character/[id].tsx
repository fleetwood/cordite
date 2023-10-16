import AbilityStubCard from 'components/containers/Ability/AbilityStubCard'
import SkillStubCard from 'components/containers/Skill/skillStubCard'
import BackgroundImage from 'components/ui/image/backgroundImage'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import Semibold from 'components/ui/typography/semibold'
import useRocketQuery from 'hooks/useRocketQuery'
import {CharAbilityStub,CharStatStub,CharacterDetail,PointsSpent,totalPoints} from 'prisma/types'
import {CharSkillStub} from 'prisma/types/charSkill'
import {useEffect,useState} from 'react'
import {twMerge} from 'tailwind-merge'

type Props = {
  id: string
}

export async function getServerSideProps(context: any) {
  const {id} = context.params
  return { props: { id }}
}

const Page = ({id, ...props}:Props) => {

  const { data: character, isLoading } = useRocketQuery<CharacterDetail>({
    name: `character-${id}`,
    url: `character/${id}`,
  })

  const [statPoints, setStatPoints] = useState(0)
  const [pointsSpent, setPointsSpent] = useState(0)
  
  useEffect(() => {
    if (character) {
      setStatPoints(() => totalPoints(character.level))
      setPointsSpent(() => PointsSpent(character.stats))
    }
  }, [character])

  const StatCard = ({ stat }: { stat: CharStatStub }) => {
    return (
      <div className={twMerge(
        "p-2 flex gap-2 bg-neutral/30 odd:bg-neutral/50",
        stat.stat.cast ? 'text-secondary italic' : ''
        )}>
        <Semibold>{stat.stat.name}</Semibold>: <span>{stat.level}</span>
      </div>
    )
  }
  
  return (
    <PageLayout>
      <Section
        title={character?.name ?? ''}
        titleClass="bg-base-100 text-primary"
      >
        {isLoading && <Spinner />}
        {character && (
          <div className="grid grid-cols-6 p-4 h-screen">
            <BackgroundImage
              className="col-span-2 h-full"
              url={character.avatar}
              contain
            />
            <div className="col-span-4 px-4">
              <h3 className="mt-4 bg-base-100/30 p-1">
                {character.charClass.name}
              </h3>
              <div className="mt-4 my-2 border-b border-primary grid xl:grid-cols-2">
                <h4 className="">Level {character.level}</h4>
                <h4 className="flex items-center gap-3">
                  <span>Points: {statPoints}</span>
                  {statPoints - pointsSpent > 0 && (
                    <span className="badge badge-success">
                      {statPoints - pointsSpent} available!
                    </span>
                  )}
                </h4>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {character.stats.map((stat: CharStatStub) => (
                  <StatCard stat={stat} key={stat.id} />
                ))}
              </div>
              <h4 className="mt-4 my-2 border-b border-primary">Skills</h4>
              <div className="grid xl:grid-cols-2 gap-2">
                {character.skills.map((skill: CharSkillStub) => (
                  <SkillStubCard noDescription skill={skill} key={skill.id} />
                ))}
              </div>
              <h4 className="mt-4 my-2 border-b border-primary">Abilities</h4>
              <div className="grid xl:grid-cols-2 gap-2">
                {character.abilities.map((ability: CharAbilityStub) => (
                  <AbilityStubCard noDescription ability={ability} key={ability.id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Section>
    </PageLayout>
  )
}

export default Page