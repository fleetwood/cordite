import useDebug from "hooks/useDebug"
import {CharSkill, Character, Prisma, Skill} from "prisma/context"

const {debug} = useDebug('charSkill')

export type CharSkillStub = CharSkill & {
  skill:      Skill
}

export const CharSkillStubInclude:Prisma.CharSkillInclude = {
  skill: true
}