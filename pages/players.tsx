
import PlayerStubCard from 'components/containers/Player/playerStubCard'
import PageLayout from 'components/ui/layouts/Page'
import Section from 'components/ui/section'
import Spinner from 'components/ui/spinner'
import {userContext} from 'context/UserContext'
import useRocketQuery from 'hooks/useRocketQuery'
import {UserStub,UserStubInclude} from 'prisma/context'

const Page = () => {
  const { user, isLoading, isAdmin, isDM } = userContext()

  const {data:players, isLoading: loadingPlayers} = useRocketQuery<UserStub[]>({name: 'players', url: 'players'})

  return (
    <PageLayout title="Players">
      <Section
        className="hidden lg:inline col-span-1 h-full opacity-70 bg-contain bg-no-repeat"
        bannerImage="/img/casting.jpg"
      >
        {isLoading && <Spinner />}
        {(isAdmin || isDM) && 
          <div className="grid grid-cols-2 gap-2">
            {players && players.map(player => (
              <PlayerStubCard player={player} key={player.id} link />
            ))}
          </div>
        }
      </Section>
    </PageLayout>
  )
}

export default Page
