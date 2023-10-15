import {randArray} from "utils/helpers"

export const useRandomBanner = () => {
  let sides = []
  for (let i = 1; i < 20; i++) { sides.push(`img/banners/banner${i.toString().padStart(2, '0')}.png`) }
  return randArray(sides)
}

export const useRandomSide = () => randArray([
  '/img/charClasses/arms-side.png',
  '/img/charClasses/bard-side.png',
  '/img/charClasses/bulwark-side.png',
  '/img/charClasses/outlaw-side.png',
  '/img/charClasses/paladin-side.png',
  '/img/charClasses/ranger-side.png',
  '/img/charClasses/retribution-side.png',
  '/img/charClasses/rogue-side.png',
  '/img/charClasses/scoundrel-side.png',
  '/img/charClasses/stalker-side.png',
  '/img/charClasses/specter-side.png',
  '/img/charClasses/warrior-side.png',
])
