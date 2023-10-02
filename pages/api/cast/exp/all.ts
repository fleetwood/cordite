import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaCastExp} from 'prisma/context'


const request = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/cast/exp/all', PrismaCastExp.all())
export default request
