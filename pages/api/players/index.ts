import {getServerSession} from "next-auth/next"

import useApi from 'hooks/useApi'
import {NextApiRequest,NextApiResponse} from 'next'
import {PrismaUser} from 'prisma/context'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await PrismaUser.me(req)
  if (!user || user.role !== 'ADMIN') {
    return res.end(401)
  }

  return useApi(res, `api/players`, PrismaUser.players())
}
