import useDebug, {DEBUG} from "hooks/useDebug";
import {AbilityCreateProps, prisma} from "prisma/context";

const { debug, fail } = useDebug('entities/character', DEBUG)

const create = async (data:AbilityCreateProps) =>
  prisma.ability.create({data,
  })

export const PrismaAbility = {
  create
}