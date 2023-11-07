import { Suspense, useEffect } from "react"
import Head from 'next/head'
import type { AppProps } from "next/app"
import { wrapper } from "../store/store"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="loading">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        <title>ITTL流程开发</title>
      </Head>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </Suspense>
  )
}

export default wrapper.withRedux(MyApp)
