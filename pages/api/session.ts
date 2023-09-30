import {NextApiRequest,NextApiResponse} from 'next'
import {getSession} from 'next-auth/react'

const request = async (req: NextApiRequest, res: NextApiResponse) => getSession({req})
export default request
