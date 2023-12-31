import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        {/* @ts-ignore */}
        <Head />
        <body>
          <Main />
          {/* @ts-ignore */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument