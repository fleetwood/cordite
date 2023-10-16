import {
  CharAbility,
  CharAbilityStub,
  CharClass,
  CharSkill,
  CharSkillStub,
  CharStat,
  CharStatStub,
  Character,
  User
} from 'prisma/context'

export type CharacterDetail = Character & {
  owner:      User
  charClass:  CharClass
  stats:      CharStatStub[]
  skills:     CharSkillStub[]
  abilities:  CharAbilityStub[]
}

export type CharacterStub = Character & {
  owner:      User
  charClass:  CharClass
  stats:      CharStat[]
  skills:     CharSkill[]
  abilities:  CharAbility[]
}

export const totalPoints = (level: number) => 4 + Math.floor(level * 1.5)
