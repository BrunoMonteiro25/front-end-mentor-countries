import { CountryProvider } from '@/contexts/CountryContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <CountryProvider>
      <Component {...pageProps} />
    </CountryProvider>
  )
}
