import { StatTree } from "prisma/context"

const all = async () => prisma.statTree.findMany({})

const create = async ({name, description}:{name: string, description:string}) => {
  return prisma.statTree.create({
    data: {
      name,
      description,
      icon: ''
    }
  })
}

export const PrismaStatTree = {
  all,
  create
}