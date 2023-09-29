import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { Adapter } from 'next-auth/adapters'
import useDebug from 'hooks/useDebug'
import {google} from 'utils/helpers'
import {prisma} from 'prisma/context'
const { debug, fail } = useDebug('api/auth/nextauth')

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: google.cordite.client_id,
      clientSecret: google.cordite.client_secrent,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.NEXT_PUBLIC_SECRET,

  session: {
    strategy: 'database',
  },

  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/login', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: "/user/setup", // If set, new users will be directed here on first sign in
  },
})
