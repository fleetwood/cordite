import useApi from 'hooks/useApi'
import useDebug from 'hooks/useDebug'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaSkill} from 'prisma/context'

const {debug} = useDebug('api/state/exp/create')

const handle = async (req: NextApiRequest, res: NextApiResponse) =>{
  const {name, description, statId} = req.body
  debug('request', {name, description, statId})
  return useApi(res, 'api/skill/create', PrismaSkill.create({name, description, statId}))
}
export default handle
