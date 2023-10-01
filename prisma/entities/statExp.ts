import useDebug from "hooks/useDebug"

const {debug} = useDebug('entities/statExp')

const all = async () => prisma.statExpression.findMany({})

const find = async (id:string) => prisma.statExpression.findUnique({where: {id}, include: {exps: true}})

const create = async ({
  name,
  description,
  statTreeId,
}: {
  name: string
  description: string
  statTreeId: string
}) => {
  debug('create', {name, description, statTreeId})

  return prisma.statExpression.create({
    data: {
      name,
      description,
      icon: '',
      statTreeId,
    },
  })
}

export const PrismaStatExp = {
  all,
  create,
  find
}
