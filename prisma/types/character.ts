import {CharAbility, CharClass, CharSkill, CharStat, Character, Skill, Stat, User} from "prisma/context";

export type CharacterDetail = Character & {
  owner:      User
  charClass:  CharClass
  stats:      CharStat[]
  skills:     CharSkill[]
  abilities:  CharAbility[]
}

export type CharacterStub = Character & {
  owner:      User
  charClass:  CharClass
  stats:      CharStat[]
  skills:     CharSkill[]
  abilities:  CharAbility[]
}

export const CharacterStubInclude = { include: {
  owner: true,
  charClass: true,
  stats: true,
  skills: true,
  abilities: true
}}