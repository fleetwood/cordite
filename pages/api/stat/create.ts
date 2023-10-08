import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStat} from 'prisma/context'

const handle = async (req: NextApiRequest, res: NextApiResponse) =>{
  const {name, description, cast} = req.body
  return useApi(res, 'api/stat/tree/create', PrismaStat.create({name, description, cast}))
}
export default handle
