import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='preload' href='/fonts/OpenSans-Regular.ttf' as='font' type='font/ttf' crossOrigin='' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
