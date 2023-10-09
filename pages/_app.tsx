import './../components/styles/cordite.css'
import { themeChange } from 'theme-change'

import { AppProps } from 'next/app'
import {useEffect} from 'react'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import UserProvider from 'context/UserContext'
import useDebug from 'hooks/useDebug'
import {DEBUG, env} from 'utils/helpers'
import {SessionProvider} from 'next-auth/react'
import ToastProvider from 'context/ToastContextProvider'

const {debug} = useDebug('__app', DEBUG)

const App = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {

  const qc = new QueryClient()
  useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <QueryClientProvider client={qc}>
      <Hydrate state={pageProps.dehydratedState}>
        <ToastProvider {...pageProps}>
          <UserProvider {...pageProps}>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </UserProvider>
        </ToastProvider>
      </Hydrate>
    </QueryClientProvider>
)}

export default App
