import useDebug from "hooks/useDebug"
import {CharacterDetail,CharacterDetailInclude,CharacterStub,CharacterStubInclude,prisma} from "prisma/context"
import {DEBUG} from "utils/helpers"

const {debug, fail} = useDebug('entities/character', DEBUG)

const playerCharacters = async (ownerId:string):Promise<CharacterStub[]> => {
  try {
    const where = {
      visible: true,
      ownerId,
    }
    debug('playerCharacters', {where, CharacterStubInclude})
    return (await prisma.character.findMany({
      where,
      include: CharacterStubInclude
    })) as CharacterStub[]
  } catch (error) {
    fail('playerCharacters', {error})
    return null
  }
}

const stubs = async (ownerId: string):Promise<CharacterStub[]> => {
  try {
    const where = {
      visible: true,
      ownerId,
    }
    return (await prisma.character.findMany({
      where,
      include: CharacterStubInclude
    })) as CharacterStub[]
  } catch (error) {
    fail('stubs', { error })
    return null
  }
}

const detail = async (id:string):Promise<CharacterDetail> => {
  try {
    const where = { id }
    debug('detail', { where, CharacterDetailInclude })
    return (await prisma.character.findUnique({
      where,
      include: CharacterDetailInclude,
    })) as unknown as CharacterDetail
  } catch (error) {
    fail('detail', { error })
    return null
  }
}

export const PrismaCharacter = {
  detail,
  playerCharacters,
  stubs
}