import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaCastExp} from 'prisma/context'

const request = async (req: NextApiRequest, res: NextApiResponse) =>{
  const {name, description, castTreeId} = req.body
  return useApi(res, 'api/cast/tree/create', PrismaCastExp.create({name, description, castTreeId}))
}
export default request
