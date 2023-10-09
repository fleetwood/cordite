import useApi from 'hooks/useApi'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaUser } from 'prisma/context'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {id, userName, image, role} = req.body
  return useApi(
    res,
    'api/user/id/update',
    PrismaUser.update({ id, userName, image, role })
  )
}
