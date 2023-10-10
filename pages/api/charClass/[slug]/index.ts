import useApi from 'hooks/useApi'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaCharClass } from 'prisma/context'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug.toString()
  return useApi(
    res,
    'api/me',
    PrismaCharClass.detail(slug)
  )
}
