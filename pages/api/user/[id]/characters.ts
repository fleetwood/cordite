import useApi from 'hooks/useApi'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaUser } from 'prisma/context'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id.toString()
  return useApi(res, 'api/user/id/characters', PrismaUser.characters(id))
}
