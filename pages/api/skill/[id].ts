import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaSkill} from 'prisma/context'

const handle = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/skill/[id]', PrismaSkill.find(req.query.id.toString()))
export default handle
