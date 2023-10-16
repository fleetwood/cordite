import useDebug, {DEBUG} from "hooks/useDebug";
import {AbilityCreateProps, prisma} from "prisma/context";

const { debug, fail } = useDebug('entities/character', DEBUG)

const create = async (props:AbilityCreateProps) => {
  try {
    const data = {
      name: props.name,
      description: props.description,
      requirement: props.requirement,
      icon: '',
      charClassId: props.charClassId,
    }
    debug('create', {data})
    return await prisma.ability.create({ data })
  } catch (error) {
    fail('create', {error})
    return null
  }
}

export const PrismaAbility = {
  create
}