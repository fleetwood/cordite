const all = async () => prisma.stat.findMany({})

const create = async ({name, description}:{name: string, description:string}) => {
  return prisma.stat.create({
    data: {
      name,
      description,
      icon: ''
    }
  })
}

export const PrismaStat = {
  all,
  create
}