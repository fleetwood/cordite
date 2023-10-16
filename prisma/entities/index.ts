import useDebug from 'hooks/useDebug'
const {fail} = useDebug('entities')

export const tryCatch = async (name: string, cb:() => any):Promise<any> => {
  try {
    return cb
  } catch (error) {
    fail(name, {error})
    return null
  }
}

export * from './ability'
export * from './character'
export * from './charClass'
export * from './charStat'
export * from './skill'
export * from './stat'
export * from './user'