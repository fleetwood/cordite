import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaUser} from 'prisma/context'

const request = async (req: NextApiRequest, res: NextApiResponse) => useApi(res, 'api/me', PrismaUser.me(req))
export default request
