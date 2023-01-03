import { GlobalStyles } from '@components/global_styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/reset.css'
import { Layout } from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>YAZMEYAA</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}
