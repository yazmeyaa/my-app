import { GlobalStyles } from '@components/global_styles'
import type { AppProps } from 'next/app'
import 'styles/reset.css'
import { Layout } from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}
