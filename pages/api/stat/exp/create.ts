import useApi from 'hooks/useApi'
import useDebug from 'hooks/useDebug'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStatExp} from 'prisma/context'

const {debug} = useDebug('api/state/exp/create')

const request = async (req: NextApiRequest, res: NextApiResponse) =>{
  const {name, description, statTreeId} = req.body
  debug('request', {name, description, statTreeId})
  return useApi(res, 'api/stat/exp/create', PrismaStatExp.create({name, description, statTreeId}))
}
export default request
