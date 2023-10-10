import useApi from 'hooks/useApi'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaCharClass } from 'prisma/context'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, banner, avatar, description, charClassId } = req.body
  return useApi(
    res,
    'api/me',
    PrismaCharClass.create({ name, banner, avatar, description, charClassId })
  )
}
