import useDebug, { DEBUG } from 'hooks/useDebug'
import {
  CharClass,
  CharClassDetail,
  CharClassStub,
  CharClassStubInclude,
  CharacterStubInclude,
  ClassCreateProps,
  prisma,
  whereSlugOrId,
} from 'prisma/context'

const { debug, fail } = useDebug('entities/charClass', DEBUG)

const stubs = async (): Promise<CharClassStub[]> => {
  try {
    const include = CharClassStubInclude
    debug('stubs', {include})
    const result = (await prisma.charClass.findMany({
      include,
    })) as unknown as CharClassStub[]
    return result
  } catch (error) {
    fail('stubs', { error })
    return null
  }
}

const create = async (props: ClassCreateProps): Promise<CharClass> => {
  try {
    const result = await prisma.charClass.create({
      data: props,
    })
    return result
  } catch (error) {
    fail('create', { error })
    return null
  }
}

const detail = async (slug: string): Promise<CharClassDetail> => {
  try {
    
    const where = whereSlugOrId({ slug }),
      include = {
        subClasses: true,
        parentClass: true,
        abilities: true,
        characters: CharacterStubInclude,
      }
    const result = (await prisma.charClass.findFirst({
      where,
      include,
    })) as unknown as CharClassDetail
    return result
  } catch (error) {
    fail('detail', { error })
    return null
  }
}

export const PrismaCharClass = {
  create,
  detail,
  stubs,
}
