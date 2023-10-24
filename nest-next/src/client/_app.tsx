
import { Suspense } from 'react'
import type { AppProps } from "next/app"
import { wrapper } from "./store/store"

console.log("app-1111")

function MyApp({ Component, pageProps }: AppProps) {
  console.log("app", pageProps)

  return (
    <Suspense fallback="loading">
      <Component {...pageProps} />
    </Suspense>
  )
}

export default wrapper.withRedux(MyApp)