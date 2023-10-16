import useDebug,{DEBUG} from "hooks/useDebug";
import {CharClass, CharClassDetail, CharClassStub,CharClassStubInclude,CharacterStubInclude,ClassCreateProps,prisma,tryCatch,whereSlugOrId} from "prisma/context";

const { debug, fail } = useDebug('entities/charClass', DEBUG)

const stubs = async():Promise<CharClassStub[]> => 
tryCatch('stubs', async () => {
  const include = CharClassStubInclude
  
  const result = await prisma.charClass.findMany({
    include
  }) as unknown as CharClassStub[]
  return result
})

const create = async (props: ClassCreateProps): Promise<CharClass> =>
tryCatch('create', async () => {
  const result = await prisma.charClass.create({
    data: props,
  })
  return result
})

const detail = async (slug: string):Promise<CharClassDetail> => 
tryCatch('detail', async () => {
  const where = whereSlugOrId({slug}),
    include = {
      subClasses: true,
      parentClass: true,
      abilities: true,
      characters: CharacterStubInclude,
    }
  const result = await prisma.charClass.findFirst(
    {where, include}
  ) as unknown as CharClassDetail
  return result
})

export const PrismaCharClass = {
  create,
  detail,
  stubs
}