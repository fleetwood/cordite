import {Ability, CharClass, Prisma} from "prisma/context";

export type AbilityStub = Ability  & {
  charClass:  CharClass
}
