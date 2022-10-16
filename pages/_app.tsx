import type { AppProps } from 'next/app'

// Layout 
import Layout from '../components/Layout'

// Global CSS
import '../global/global.css'

// AOS
import '../node_modules/aos/dist/aos.css'
import '../node_modules/aos/dist/aos'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
