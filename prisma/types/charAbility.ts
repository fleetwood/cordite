import useDebug from "hooks/useDebug"
import {CharAbility, Character, Ability, Prisma} from "prisma/context"

const {debug} = useDebug('charAbility')

export type AbilityCreateProps = {
  name:         string
  description?: string
  requirement:  number
  charClassId:  string
}

export type CharAbilityStub = CharAbility & {
  character:  Character
  ability:      Ability
}

export const CharAbilityStubInclude:Prisma.CharAbilityInclude = {
  ability: true
}
