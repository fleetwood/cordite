import React, { createContext, ReactNode, useContext } from 'react'
import { User } from 'prisma/context'
import useRocketQuery from 'hooks/useRocketQuery'

type UserProviderProps = {
  children?: ReactNode
}

export const UserContext = createContext({} as any)
export const userContext = () => useContext(UserContext)

const UserProvider = ({ children }: UserProviderProps) => {
  const value = useRocketQuery<User>({ name: 'user', url: 'me' })
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
