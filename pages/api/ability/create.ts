import useApi from 'hooks/useApi'
import useDebug from 'hooks/useDebug'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaAbility} from 'prisma/context'

const { debug } = useDebug('api/state/exp/create')

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, description, requirement, charClassId } = req.body
  debug('request', { name, description, requirement, charClassId })
  return useApi(
    res,
    'api/ability/create',
    PrismaAbility.create({ name, description, requirement, charClassId })
  )
}
export default handle
