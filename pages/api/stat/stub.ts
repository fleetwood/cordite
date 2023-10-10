import useDebug from 'hooks/useDebug'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStat} from 'prisma/context'
import {DEBUG, __prod__} from 'utils/helpers'

const {debug, fail} = useDebug('api/stat/detail')

const handle = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const id = req.query.id
  try {
    debug('handler', { id })
    const result = PrismaStat.stubs()
    res.status(200).json(result)
  } catch (e) {
    fail('FAIL', e)
    const status = __prod__ ? 204 : 400
    res.status(status).json({ code: name, message: JSON.stringify(e) })
  }
}
export default handle