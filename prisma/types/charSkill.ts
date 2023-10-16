import useDebug from "hooks/useDebug"
import {CharSkill, Character, Prisma, Skill} from "prisma/context"

const {debug} = useDebug('charSkill')

export type CharSkillStub = CharSkill & {
  character:  Character
  skill:      Skill
}

export const CharSkillStubInclude:Prisma.CharSkillInclude = {
  character: true,
  skill: true
}