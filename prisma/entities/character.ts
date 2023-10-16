import useDebug from "hooks/useDebug"
import {CharacterDetail, CharacterStub, CharacterStubInclude, prisma} from "prisma/context"
import {DEBUG} from "utils/helpers"

const {debug, fail} = useDebug('entities/character', DEBUG)

const playerCharacters = async (ownerId:string) => {
  return await prisma.character.findMany({
    where: {
      visible: true,
      ownerId
    },
    ...CharacterStubInclude
  }) as CharacterStub[]
}

const stubs = async (ownerId: string) => {
  return (await prisma.character.findMany({
    where: {
      visible: true,
      ownerId,
    },
    ...CharacterStubInclude,
  })) as CharacterStub[]
}

const detail = async (id:string) => {
  const where = {
    where: { id },
    include: {
      owner: true,
      charClass: true,
      skills: {
        include: {
          skill: true,
        },
      },
      stats: {
        include: {
          stat: true,
        },
      },
      abilities: {
        include: {
          ability: true,
        },
      },
    },
  }
  debug('detail', where)
  return await prisma.character.findUnique(where) as CharacterDetail
}

export const PrismaCharacter = {
  detail,
  playerCharacters,
  stubs
}