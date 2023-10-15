import {CharStat, Character, Stat} from "prisma/context"

export type CharStatStub = CharStat & {
  character:  Character
  stat:       Stat
}

export type CharStatCreateProps = {
  characterId: string
  statId:      string
  level:       number
  cast?:       boolean
}