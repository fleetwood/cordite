import useDebug from 'hooks/useDebug'
import {DEBUG, __prod__, env} from 'utils/helpers'
// Import needed packages
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'
import ws from 'ws'

const {debug} = useDebug('prisma/context', DEBUG)
const connectionString = `${env.NEXT_PUBLIC_DATABASE_URL}`

// Init prisma client
const pool = new Pool({ connectionString })
// neonConfig.webSocketConstructor = ws
// const adapter = new PrismaNeon(pool)
export const prisma = new PrismaClient({
  // adapter,
  log: ['query', 'info', 'error'],
  errorFormat: 'pretty'
})

// prisma.$on('query', (e) => {
//   const {query, params} = e
//   debug('query', { query, params })
// })

// prisma.$on('error', (e) => {
//   debug('error', { message: e.message })
// })

// Use Prisma Client as normal
export * from '@prisma/client'
export * from './types'
export * from './entities'