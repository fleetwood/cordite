import useDebug from "hooks/useDebug"
import {prisma} from "prisma/context"

const {debug} = useDebug('entities/statExp')

const all = async () => prisma.skill.findMany({})

const find = async (id:string) => prisma.skill.findUnique({where: {id}, include: {stat: true}})

const create = async ({
  name,
  description,
  statId,
}: {
  name: string
  description: string
  statId: string
}) => {
  debug('create', {name, description, statId})

  return prisma.skill.create({
    data: {
      name,
      description,
      icon: '',
      statId,
    },
  })
}

export const PrismaSkill = {
  all,
  create,
  find
}
