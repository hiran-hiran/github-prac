import '../styles/globals.css'
import { AllWrapper } from './components/allWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <AllWrapper>
      <Component {...pageProps} />
    </AllWrapper>
  )
}

export default MyApp
