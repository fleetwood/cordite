import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStat} from 'prisma/context'

const request = async (req: NextApiRequest, res: NextApiResponse) =>{
  const {name, description} = req.body
  return useApi(res, 'api/stat/tree/create', PrismaStat.create({name, description}))
}
export default request
