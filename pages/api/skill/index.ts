import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaSkill} from 'prisma/context'

const handle = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/skill/all', PrismaSkill.all())
export default handle
