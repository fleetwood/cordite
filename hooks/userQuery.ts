import {User} from 'prisma/context'
import useRocketQuery from './useRocketQuery'

type Props = {
  slug: string
}

const userQuery = async ({slug, ...props}:Props) => {
  const {data: user, isLoading, error, invalidate } = useRocketQuery<User>({name: `user-${slug}`, url: `user/${slug}`})
  return {
    user, isLoading, error, invalidate,
    isAdmin: user?.role   === 'ADMIN',
    isDM: user?.role      === 'DM',
    isPlayer: user?.role  === 'PLAYER',
  }
}

export default userQuery