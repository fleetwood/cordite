import useDebug from "hooks/useDebug"
import {CharSkill, Character, Skill} from "prisma/context"

const {debug} = useDebug('charSkill')

export type CharSkillStub = CharSkill & {
  character:  Character
  skill:      Skill
}
