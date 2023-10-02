const all = async (castTreeId?:string) => castTreeId 
  ? prisma.castExpression.findMany({where: { castTreeId: castTreeId}})
  : prisma.castExpression.findMany({})

const create = async ({
  name,
  description,
  castTreeId,
}: {
  name: string
  description: string
  castTreeId: string
}) => {
  return prisma.castExpression.create({
    data: {
      name,
      description,
      icon: '',
      castTreeId
    },
  })
}

export const PrismaCastExp = {
  all,
  create
}