import {Ability,CharClass,CharacterStub,Prisma} from "prisma/context"
import {AbilityStub} from "./ability"

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


export type CharClassDetail = CharClass & {
  subclasses:   []
  parentClass?: CharClass
  abilities:    AbilityStub[]
  characters:   CharacterStub[]
}

export const CharClassDetailInclude: Prisma.CharClassInclude = {
  subClasses: {
    include: {
      parentClass: true,
      abilities: true,
      _count: {
        select: {
          characters: true,
        },
      },
    },
  },
  parentClass: true,
  abilities: {
    include: {
      charClass: true,
    },
  },
  characters: { include: {
    abilities: {
      include: {
        ability: true
      }
    },
    skills: {
      include: {
        skill: true
      }
    },
    stats: {
      include: {
        stat: true
      }
    }
  }},
}