import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaCastTree} from 'prisma/context'


const request = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/cast/tree/all', PrismaCastTree.all())
export default request
