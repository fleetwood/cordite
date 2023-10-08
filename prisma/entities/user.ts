import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import { User, prisma } from 'prisma/context'
import {CharacterStub, CharacterStubInclude} from 'prisma/types/character'

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

const characters = async (id:string):Promise<CharacterStub[]> => {
  return await prisma.character.findMany({
    where: { visible: true},
    include: CharacterStubInclude
  }) as CharacterStub[]
}

export const PrismaUser = {
  characters,
  me
}
