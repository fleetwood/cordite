import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import { User, prisma } from 'prisma/context'

const me = async (req: NextApiRequest): Promise<User> =>{
  try {
    const email = ((await getSession({ req }))?.user?.email || '')
    return await prisma.user.findUnique({
      where: { email },
    })
  } catch (error) {
   return undefined 
  }
}
export const PrismaUser = {
  me
}
