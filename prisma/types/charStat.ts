import useDebug from "hooks/useDebug"
import {CharStat,Stat} from "prisma/context"
import {Dispatch,SetStateAction} from "react"

const {debug} = useDebug('charStats')

export const charisma = 'charisma',
  finesse = 'finesse',
  fortitude = 'fortitude',
  intuition = 'intuition',
  physique = 'physique',
  wit = 'wit',
  air = 'air',
  earth = 'earth',
  water = 'water',
  fire = 'fire',
  light = 'light',
  life = 'life',
  spacetime = 'spacetime'

export type CharStatStub = CharStat & {
  stat:       Stat
}

export type CharStatCreateProps = {
  characterId: string
  statId:      string
  level:       number
  cast?:       boolean
}

const createProp = (stats: Stat[], prop: string, cast = false) => {
  const stat = stats.find((a) => a.name.toLowerCase() === prop)
  return stat
    ? {
        characterId: undefined,
        statId: stat.id,
        level: 0,
        cast,
      }
    : undefined
}

type SetStat = Dispatch<SetStateAction<CharStatCreateProps>>

type GCCP = {
  stats: Stat[],
  setCha:       SetStat,
  setFin:       SetStat,
  setFort:      SetStat,
  setInt:       SetStat,
  setPhy:       SetStat,
  setWit:       SetStat,
  setAir:       SetStat,
  setEarth:     SetStat,
  setWater:     SetStat,
  setFire:      SetStat,
  setLight:     SetStat,
  setLife:      SetStat,
  setSpacetime: SetStat
}

export const GenerateCharacterCreateProps = (props:GCCP) => {
  const {stats,setCha,setFin,setFort,setInt,setPhy,setWit,setAir,setEarth,setWater,setFire,setLight,setLife,setSpacetime} = props
  setCha(() => createProp(stats, charisma))
  setFin(() => createProp(stats, finesse))
  setFort(() => createProp(stats, fortitude))
  setInt(() => createProp(stats, intuition))
  setPhy(() => createProp(stats, physique))
  setWit(() => createProp(stats, wit))

  setAir(() => createProp(stats, air, true))
  setEarth(() => createProp(stats, earth, true))
  setWater(() => createProp(stats, water, true))
  setFire(() => createProp(stats, fire, true))
  setLight(() => createProp(stats, light, true))
  setLife(() => createProp(stats, life, true))
  setSpacetime(() => createProp(stats, spacetime, true))
}

export const PointsSpent = (stats:CharStatCreateProps[]):number => {
  let result = 0
  // @ts-ignore   Because the linter is not casting this properly for some stupid reason
  let levels:number[] = stats.filter(s => s?.level !== undefined).map(s =>parseInt(s.cast ? s.level * 2 : s.level))
  return levels.reduce((x, l) => x += l, 0)
}