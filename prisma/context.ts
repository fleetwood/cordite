import useDebug from 'hooks/useDebug'
import {__prod__, env} from 'utils/helpers'
// Import needed packages
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'
import ws from 'ws'

neonConfig.webSocketConstructor = ws
const connectionString = `${env.NEXT_PUBLIC_DATABASE_URL}`

// Init prisma client
const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
export const prisma = new PrismaClient({ adapter })

// Use Prisma Client as normal
export * from '@prisma/client'
export * from './types'
export * from './entities'