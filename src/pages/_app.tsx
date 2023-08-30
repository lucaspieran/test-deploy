import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/carousel.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ingenia</title>
        <link rel="ingenia" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default appWithTranslation(App)
