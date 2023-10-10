import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaCharClass} from 'prisma/context'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return useApi(res, 'api/me', PrismaCharClass.stubs())
}
