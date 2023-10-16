import useDebug,{DEBUG} from 'hooks/useDebug'
import {
  CharClass,
  CharClassDetail,
  CharClassStub,
  ClassCreateProps,
  prisma
} from 'prisma/context'

const { debug, fail } = useDebug('entities/charClass', DEBUG)

const stubs = async (): Promise<CharClassStub[]> => {
  try {
    debug('stubs')
    const result = await prisma.charClass.findMany({
      include: {
        subClasses: true,
        parentClass: true,
        abilities: true,
        _count: {
          select: {
            characters: true,
          },
        },
      },
    }) as unknown as CharClassStub[]
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

const detail = async (name: string): Promise<CharClassDetail> => {
  try {
    const result = (await prisma.charClass.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
      },
      include: {
        subClasses: {
          include: {
            parentClass: true,
            abilities: true,
            _count: {
              select: {
                characters: true,
              },
            },
          },
        },
        parentClass: true,
        abilities: { include: { charClass: true } },
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
