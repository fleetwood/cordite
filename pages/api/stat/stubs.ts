import useApi from 'hooks/useApi'
import useDebug,{DEBUG} from 'hooks/useDebug'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaStat} from 'prisma/context'

const {debug, fail} = useDebug('api/stat/detail', DEBUG)

export default async function handle(req: NextApiRequest, res: NextApiResponse) { useApi(res, 'api/stat/stubs', PrismaStat.stubs())}
