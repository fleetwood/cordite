import useDebug from "hooks/useDebug"
import {CharacterDetail,CharacterDetailInclude,CharacterStub,CharacterStubInclude,prisma} from "prisma/context"
import {DEBUG} from "utils/helpers"

const {debug, fail} = useDebug('entities/character', DEBUG)

const playerCharacters = async (ownerId:string):Promise<CharacterStub[]> => {
  try {
    const where = {
        visible: true,
        ownerId,
      },
      include = CharacterStubInclude
    debug('playerCharacters', {where, include})
    return (await prisma.character.findMany({
      where,
      ...include
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
      },
      include = CharacterStubInclude

    return (await prisma.character.findMany({
      where,
      ...include,
    })) as CharacterStub[]
  } catch (error) {
    fail('stubs', { error })
    return null
  }
}

const detail = async (id:string):Promise<CharacterDetail> => {
  try {
    const where = { id },
      include = CharacterDetailInclude

    debug('detail', { where })
    return (await prisma.character.findUnique({
      where,
      ...include,
    })) as CharacterDetail
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