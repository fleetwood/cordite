type DebugLevels = 'DEBUG' | 'INFO' | 'ERROR'
export const DEBUG = 'DEBUG',
  INFO = 'INFO',
  ERROR = 'ERROR'

  
  export const __prod__ = process.env.NODE_ENV === 'production'
  export const __logLevel__: DebugLevels = (process.env.NEXT_PUBLIC_LOG_LEVEL as DebugLevels) || 'ERROR'
  
  export const __previewFeatures__ = __prod__ ? [] : ['driverAdapters']
  export const __proto__ = process.env.NEXT_PUBLIC_PROTOCOL || 'http'
  export const __host__ = process.env.NEXT_PUBLIC_HOST || 'localhost'
  export const __port__ = Number(process.env.NEXT_PUBLIC_PORT) || 3000
export const __site__ = process.env.NEXT_PUBLIC_SITE || `${__proto__}:${__host__}:${__port__}`

export const google = {
  cordite: {
    api_key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    client_secrent: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
  },
}

export const __cdr_refetch__ = Number(process.env.NEXT_PUBLIC_REFETCH || 1000)

if (__logLevel__ === 'DEBUG' && !__prod__) {
  console.log(
    JSON.stringify(
      {
        starting: '********** constants **********',
        __prod__,
        __logLevel__,
        __proto__,
        __host__,
        __port__,
        __site__,
        __cdr_refetch__,
        done: '********** / constants **********',
      },
      null,
      4
    )
  )
}
