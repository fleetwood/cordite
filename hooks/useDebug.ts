import { __logLevel__ } from 'utils/helpers'

export type DebugProps = 'DEBUG' | 'INFO' | 'ERROR'
export const DEBUG = 'DEBUG',
  INFO = 'INFO',
  ERROR = 'ERROR'

const useDebug = (
  fileName: string,
  level: DebugProps = __logLevel__ as unknown as DebugProps
) => {
  const fileMethod = (method: string) => `${fileName}.${method}`

  const methodData = (data?: any) => stringify({ ...(data || null) })

  const stringify = (data: any) => {
    try {
      return JSON.stringify(data, null, 2)
    } catch (error) {
      return { reason: 'Ojbect could not be stringified', error }
    }
  }

  const log = (method: string, t?: any) =>
    console.log(`
=====================    
${fileMethod(method)} 
${methodData(t)}
=====================    
`)

  const fail = (method: string, data?: any) => log(method, { data })

  const debug = (method: string, data?: any, overrideLevel = false) => {
    if (overrideLevel === true || level === 'DEBUG') {
      log(method, { level, data })
    }
  }
  const info = (method: string, data?: any, overrideLevel = false) => {
    if (overrideLevel === true || level === 'DEBUG' || level === 'INFO') {
      log(method, { level, data })
    }
  }

  return {
    debug,
    info,
    fail,
    stringify,
    level,
    fileMethod,
  }
}
export default useDebug
