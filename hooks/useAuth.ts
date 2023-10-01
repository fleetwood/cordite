import {User} from "prisma/context"
import useRocketQuery from "./useRocketQuery"

const useAuth = () => {
  const {data: me, isLoading, error, invalidate} = useRocketQuery<User>({name: 'me', url: 'me'})
  
  return {
    me,
    isLoading,
    error,
    invalidate
  }
}

export default useAuth