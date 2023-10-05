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

export const PrismaStat = {
  all,
  create
}