import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Exotic Cars</title>
      <meta 
        name="description" 
        content="A simple project starter to work with TypeScript, React, NextJS and 
      Styled Components" 
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
    </>
  )
}
export default MyApp
