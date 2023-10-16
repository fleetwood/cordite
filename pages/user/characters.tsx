import CharacterCreateView from 'components/containers/Character/characterCreate'
import UserCharacters from 'components/containers/User/userCharacters'
import PageLayout from 'components/ui/layouts/Page'
import Typography from 'components/ui/typography/typography'
import {userContext} from 'context/UserContext'
import {signIn} from 'next-auth/react'

const Page = (props) => {
  const {
    user,
    invalidate: invalidateUser,
    isLoggedOut,
    isAdmin,
    isDm,
  } = userContext()

  return (
    <PageLayout title="Characters" sideImage='/img/character-side.jpeg'>
      <div className="px-4">
        {user && <UserCharacters user={user} />}
        {/* {user && <CharacterCreateView />} */}
        {isLoggedOut && (
          <div>
            You must <span className='underline cursor-pointer hover:bg-primary/20' onClick={() => signIn()}>login</span> to create a character.
          </div>
        )}
      </div>
    </PageLayout>
  )
}

export default Page
