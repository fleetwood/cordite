import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStatExp} from 'prisma/context'

const request = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/stat/tree/all', PrismaStatExp.all())
export default request
