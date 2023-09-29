import './../components/styles/cordite.css'
import { themeChange } from 'theme-change'

import { AppProps } from 'next/app'
import {useEffect} from 'react'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'

const App = ({ Component, pageProps }: AppProps) => {

  const qc = new QueryClient()
  useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <QueryClientProvider client={qc}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
)}

export default App
