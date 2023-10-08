import {NextApiRequest,NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'

const handle = async (req: NextApiRequest, res: NextApiResponse) => getSession({req})
export default handle
