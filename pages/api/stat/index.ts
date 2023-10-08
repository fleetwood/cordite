import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStat} from 'prisma/context'

const handle = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/stat/tree/all', PrismaStat.all())
export default handle
