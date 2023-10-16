import {Ability,CharClass,CharacterStub,CharacterStubInclude,Prisma} from "prisma/context"
import {AbilityStub, AbilityStubInclude} from "./ability"

export type ClassCreateProps = {
  name: string
  banner?: string
  avatar?: string
  description: string
  charClassId?: string
}

export type CharClassStub = CharClass & {
  subclasses:   CharClass[]
  parentClass?: CharClass
  abilities:    Ability[]
  _count:       {
                  characters: number
                }
}

export const CharClassStubInclude:Prisma.CharClassInclude = {
  subClasses: true,
  parentClass: true,
  abilities: true,
  _count: {
    select: {
      characters: true,
    },
  },
}

export type CharClassDetail = CharClass & {
  subclasses:   CharClassStub[]
  parentClass?: CharClass
  abilities:    AbilityStub[]
  characters:   CharacterStub[]
}

export const CharClassDetailInclude: Prisma.CharClassInclude = {
  subClasses: { include: CharClassStubInclude },
  parentClass: true,
  abilities: { include: AbilityStubInclude},
  characters: { include: CharacterStubInclude}
}