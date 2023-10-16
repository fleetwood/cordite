import {Ability, CharClass, Prisma} from "prisma/context";

export type AbilityStub = Ability  & {
  charClass:  CharClass
}

export const AbilityStubInclude:Prisma.AbilityInclude = {
  charClass: true
}