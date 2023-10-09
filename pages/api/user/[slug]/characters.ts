import useApi from 'hooks/useApi'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaUser } from 'prisma/context'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug.toString()
  return useApi(res, `api/user/${slug}/characters`, PrismaUser.characters(slug))
}
