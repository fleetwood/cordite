import {
  CharAbility,
  CharAbilityStub,
  CharAbilityStubInclude,
  CharClass,
  CharSkill,
  CharSkillStub,
  CharSkillStubInclude,
  CharStat,
  CharStatStub,
  CharStatStubInclude,
  Character,
  Prisma,
  User,
} from 'prisma/context'

export type CharacterDetail = Character & {
  owner: User
  charClass: CharClass
  stats: CharStatStub[]
  skills: CharSkillStub[]
  abilities: CharAbilityStub[]
}

export const CharacterDetailInclude: Prisma.CharacterInclude =
{
    owner: true,
    charClass: true,
    skills: {
      include: CharSkillStubInclude
    },
    stats: {
      include: CharStatStubInclude
    },
    abilities: {
      include: CharAbilityStubInclude
    },
  }

export type CharacterStub = Character & {
  owner: User
  charClass: CharClass
  stats: CharStat[]
  skills: CharSkill[]
  abilities: CharAbility[]
}

export const CharacterStubInclude:Prisma.CharacterInclude = {
  owner: true,
  charClass: true,
  stats: true,
  skills: true,
  abilities: true,
}

export const totalPoints = (level: number) => 4 + Math.floor(level * 1.5)
