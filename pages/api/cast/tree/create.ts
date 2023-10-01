import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaCastTree} from 'prisma/context'

const request = async (req: NextApiRequest, res: NextApiResponse) =>{
  const {name, description} = req.body
  return useApi(res, 'api/cast/tree/create', PrismaCastTree.create({name, description}))
}
export default request
