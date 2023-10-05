import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStat} from 'prisma/context'

const request = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/stat/tree/all', PrismaStat.all())
export default request
