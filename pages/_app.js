// css untuk development
// import '../styles/globals.css'

// css untuk production
import "../build.css"
import {appWithTranslation} from "next-i18next"
import { ThemeProvider } from 'next-themes'
import 'react-loading-skeleton/dist/skeleton.css'


import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";



// FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default appWithTranslation(wrapper.withRedux(MyApp))
