import {Ability, CharClass, Character} from "@prisma/client";
import {CharacterStub} from "./character";

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

export const CharClassStubInclude = {
  subClasses: true,
  parentClass: true,
  abilities: true,
  _count: {
    select: {
      characters: true,
    },
  },
}

export type CharClassDetail = CharClassStub & {
  characters:   CharacterStub[]
}