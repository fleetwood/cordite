import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStatTree} from 'prisma/context'

const request = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/stat/tree/all', PrismaStatTree.all())
export default request
