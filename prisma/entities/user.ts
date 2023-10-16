import useDebug from 'hooks/useDebug'
import {NextApiRequest} from 'next'
import {getSession} from 'next-auth/react'
import {CharacterStub,Role,User,UserDetailProps,UserStub,getUserWhere,prisma} from 'prisma/context'
import {DEBUG,toSlug} from 'utils/helpers'

const {debug} = useDebug('/entities/user')

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

const players = async (): Promise<UserStub[]> =>{
  try {
    return (await prisma.user.findMany({
      where: {
        visible: true,
        role: 'PLAYER',
      },
      include: {
        characters: {
          include: {
            owner: true,
            charClass: true,
            skills: {
              include: { skill: true },
            },
            stats: {
              include: { stat: true },
            },
            abilities: {
              include: { ability: true },
            },
          },
        },
      },
    })) as UserStub[]
  } catch (error) {
   return undefined 
  }
}

const characters = async ({slug}:{slug:string}):Promise<CharacterStub[]> => {
  const find = {
    where: { owner: { slug } },
    include: {
      owner: true,
      charClass: true,
      skills: {
        include: { skill: true },
      },
      stats: {
        include: { stat: true },
      },
      abilities: {
        include: { ability: true },
      },
    },
  }
  debug('characters', {find})
  return await prisma.character.findMany(find)
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
  players,
  profile,
  update
}
