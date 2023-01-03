import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel='preload' href='/fonts/OpenSans-Regular.ttf' as='font' type='font/ttf' crossOrigin='' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
