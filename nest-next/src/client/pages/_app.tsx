/* eslint-disable @typescript-eslint/ban-ts-comment */
// import "styles/global.css"
// import "antd/dist/antd.css"
import Head from 'next/head'
import { Suspense, useEffect } from "react"
import type { AppProps } from "next/app"
import { wrapper } from "../store/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="loading">
      {/* @ts-ignore */}
      <Head>
        <title>云速易连</title>
      </Head>
      <Component {...pageProps} />
    </Suspense>
  )
}

export default wrapper.withRedux(MyApp)
