import {StatStub, StatStubInclude} from "prisma/context"

const all = async () => prisma.stat.findMany({})

const create = async ({name, description, cast}:{name: string, description:string, cast?: boolean}) => {
  return prisma.stat.create({
    data: {
      name,
      description,
      icon: '',
      cast
    }
  })
}

const stubs = async ():Promise<StatStub[]> => prisma.stat.findMany({
  ...StatStubInclude
})

const stub = async (id:string):Promise<StatStub> => prisma.stat.findUnique({
  where: { id },
  ...StatStubInclude
})

export const PrismaStat = {
  all,
  create,
  stub,
  stubs
}