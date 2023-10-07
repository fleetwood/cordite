import './../components/styles/cordite.css'
import { themeChange } from 'theme-change'

import { AppProps } from 'next/app'
import {useEffect} from 'react'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import UserProvider from 'context/UserContext'
import useDebug from 'hooks/useDebug'
import {DEBUG, env} from 'utils/helpers'

const {debug} = useDebug('__app', DEBUG)

const App = ({ Component, pageProps }: AppProps) => {

  const qc = new QueryClient()
  useEffect(() => {
    themeChange(false)

    debug('app', {
      data: env})
  }, [])
  return (
    <QueryClientProvider client={qc}>
      <Hydrate state={pageProps.dehydratedState}>
        <UserProvider {...pageProps}>
          <Component {...pageProps} />
        </UserProvider>
      </Hydrate>
    </QueryClientProvider>
)}

export default App
