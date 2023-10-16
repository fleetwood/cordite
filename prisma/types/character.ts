import {CharAbility, CharAbilityStub, CharClass, CharSkill, CharSkillStub, CharStat, CharStatStub, Character, Skill, Stat, User} from "prisma/context";

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
  stats:      CharStatStub[]
  skills:     CharSkillStub[]
  abilities:  CharAbilityStub[]
}

export const CharacterStubInclude = { include: {
  owner: true,
  charClass: true,
  stats: {include: {stat: true}},
  skills: {include: {skill: true}},
  abilities: true
}}

export const totalPoints = (level:number) => 4 + (Math.floor(level * 1.5))