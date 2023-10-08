import {Skill, Stat} from "prisma/context"

export type StatStub = Stat & {
  skills: Skill[]
}

export const StatStubInclude = {include: {
  skills: true
}}