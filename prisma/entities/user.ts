import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import { Role, User, prisma } from 'prisma/context'
import {CharacterStub, CharacterStubInclude} from 'prisma/types/character'
import {UserDetailProps, getUserWhere} from 'prisma/types/user'
import {toSlug} from 'utils/helpers'

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

const profile = async (props:UserDetailProps): Promise<User> =>{
  try {
    return await prisma.user.findUnique({
      where: getUserWhere(props),
    })
  } catch (error) {
   return undefined 
  }
}

const characters = async (slug:string):Promise<CharacterStub[]> => {
  return await prisma.character.findMany({
    where: { visible: true, owner: { slug } },
    include: CharacterStubInclude
  }) as CharacterStub[]
}

export type UserUpdateProps = {
   id: string
   name:string
   image:string
   role: Role
   visible: boolean
}

const update = async ({id, name, image, role, visible}:UserUpdateProps) => await prisma.user.update({
  where: { id },
  data: {
    name,
    role,
    image,
    slug: toSlug(name),
    visible
  }
})

export const PrismaUser = {
  characters,
  me,
  profile,
  update
}
