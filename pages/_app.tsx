import type { AppProps } from 'next/app'
import 'styles/reset.css'
import { Layout } from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
