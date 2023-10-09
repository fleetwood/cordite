import useApi from 'hooks/useApi'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaUser } from 'prisma/context'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {id, name, image, role, visible} = req.body
  return useApi(
    res,
    'api/user/slug/update',
    PrismaUser.update({ id, name, image, role, visible })
  )
}
