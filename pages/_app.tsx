import './../components/styles/cordite.css'
import { themeChange } from 'theme-change'

import { AppProps } from 'next/app'
import {useEffect} from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    themeChange(false)
  }, [])
  return <Component {...pageProps} />
}

export default App
