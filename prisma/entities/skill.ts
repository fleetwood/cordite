import useDebug, {DEBUG} from "hooks/useDebug"
import {SkillCreateProps, prisma} from "prisma/context"

const {debug} = useDebug('entities/statExp', DEBUG)

const all = async () => prisma.skill.findMany({})

const find = async (id:string) => prisma.skill.findUnique({where: {id}, include: {stat: true}})

const create = async (props:SkillCreateProps) => {
  const data = { data: {
    ...props,
    icon: ''
  }}
  debug('create', data)

  return prisma.skill.create(data)
}

export const PrismaSkill = {
  all,
  create,
  find
}
