import { GlobalStyles } from '@components/global_styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/reset.css'
import { Layout } from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta property="og:title" content="Евгений Антоненков, Fullstack-разработчик." />
        <meta property="og:description" content="С большим удовольствием готов принять участие в каком-нибудь проекте или обсудить любые другие вопросы." />
        <meta property="og:site_name" content="Личный сайт Евгения Антоненкова, в котором он рассказывает о себе, своих достижениях и неудачах."/>
        <meta property="og:url" content="https://yazmeyaa.itracers.xyz/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://yazmeyaa.itracers.xyz/images/my_photo.jpg" />
        <meta property="og:image:width" content="630"/>
        <meta property="og:image:height" content="630"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>YAZMEYAA</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}
