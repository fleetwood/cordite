import {CharClass, Character, Skill, Stat, User} from "prisma/context";

export type CharacterStub = Character & {
  owner:      User
  charClass:  CharClass
  stats:      Stat[]
  skills:     Skill[]
}

export const CharacterStubInclude = {
  owner: true,
  charClass: true,
  stats: true,
  skills: true
}