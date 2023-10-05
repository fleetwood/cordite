import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaSkill} from 'prisma/context'

const request = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/stat/exp/[id]', PrismaSkill.find(req.query.id.toString()))
export default request
