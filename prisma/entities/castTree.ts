const all = async () => prisma.castTree.findMany({})

const create = async ({name, description}:{name: string, description:string}) => {
  return prisma.castTree.create({
    data: {
      name,
      description,
      icon: ''
    }
  })
}

export const PrismaCastTree = {
  all,
  create
}