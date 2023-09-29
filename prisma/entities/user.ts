import {NextApiRequest} from "next"
import {getSession} from "next-auth/react"
import {User} from "prisma/context"

const me = async (email: string): Promise<User> =>
  (await prisma.user.findUnique({
    where: { email },
  }))

const sessionUser = async (req: NextApiRequest): Promise<User> =>
    me((await getSession({ req }))?.user?.email || '')

  export const user = {
    me
  }