import '../styles/globals.css'
import {appWithTranslation} from "next-i18next"
import { ThemeProvider } from 'next-themes'
import 'react-loading-skeleton/dist/skeleton.css'



// FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
