import useDebug, { DebugProps } from 'hooks/useDebug'
import { NextApiResponse } from 'next'
import { __prod__ } from 'utils/helpers'

export const NotImplemented = async (): Promise<any> => {
  throw { code: 'NI', message: 'Not implemented' }
}

const useApi = async <T>(
  res: NextApiResponse,
  name: string,
  cb: Promise<T>,
  level?: DebugProps
) => {
  const { debug, fail, stringify } = useDebug(name, level)
  try {
    const result = await cb
    res.status(200).json(result)
  } catch (e) {
    fail('FAIL', e)
    const status = __prod__ ? 204 : 400
    res.status(status).json({ code: name, message: stringify(e) })
  }
}
export default useApi
