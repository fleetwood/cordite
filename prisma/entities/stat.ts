import {StatStub, StatStubInclude, prisma} from "prisma/context"

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

const stubs = async () => prisma.stat.findMany({
  include: {
    skills: true
  }
})

const stub = async (id:string):Promise<StatStub> => prisma.stat.findUnique({
  where: { id },
  include: {
    skills: true
  }
})

export const PrismaStat = {
  all,
  create,
  stub,
  stubs
}