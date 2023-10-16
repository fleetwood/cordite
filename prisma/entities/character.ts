import {CharacterDetail, CharacterStub, CharacterStubInclude, prisma} from "prisma/context"

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
  return await prisma.character.findUnique({
    where: { id },
    include: {
      owner: true,
      charClass: true,
      skills: {
        include: {
          skill: true
        }
      },
      stats: {
        include: {
          stat: true
        }
      },
      abilities: {
        include: {
          ability: true
        }
      }
    }
  }) as CharacterDetail
}

export const PrismaCharacter = {
  detail,
  playerCharacters,
  stubs
}