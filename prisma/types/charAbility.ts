import useDebug from "hooks/useDebug"
import {CharAbility, Character, Ability} from "prisma/context"

const {debug} = useDebug('charAbility')

export type CharAbilityStub = CharAbility & {
  character:  Character
  ability:      Ability
}
