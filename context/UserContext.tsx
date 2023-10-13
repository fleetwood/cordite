import React, { createContext, ReactNode, useContext } from 'react'
import { User } from 'prisma/context'
import useRocketQuery from 'hooks/useRocketQuery'

type UserProviderProps = {
  children?: ReactNode
}

export const UserContext = createContext({} as any)
export const userContext = () => useContext(UserContext)

const UserProvider = ({ children }: UserProviderProps) => {
  const {data:user, isLoading, error, invalidate, refetch} = useRocketQuery<User>({ name: 'user', url: 'me' })
  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        error,
        invalidate,
        refetch,
        isDM: user?.role === 'DM',
        isAdmin: user?.role === 'ADMIN',
        loggedOut: !isLoading && !user
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
