import {prisma} from "prisma/context";

const create = async ({ name, description, level, charClassId }) =>
  prisma.ability.create({
    data: { name, icon: '', description, level, requirement: level, charClassId },
  })

export const PrismaAbility = {
  create
}