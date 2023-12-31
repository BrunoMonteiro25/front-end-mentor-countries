import { CountryProvider } from '@/contexts/CountryContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { GlobalStyle } from '@/styles/GlobalStyle'

export default function App({ Component, pageProps }) {
  return (
    <CountryProvider>
      <ThemeProvider initialTheme={pageProps.initialTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </CountryProvider>
  )
}
