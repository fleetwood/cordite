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
  _count: {
    characters: number
  }
}

export type CharClassDetail = CharClassStub & {
  characters:   CharacterStub[]
}