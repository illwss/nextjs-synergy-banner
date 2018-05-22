import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render () {
    return (
      <html>
      <Head>
        <meta charSet='utf-8' className='next-head' />
        <meta id='vp' name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <meta name='theme-color' content='#F05A22' />
        <script src='https://wchat.freshchat.com/js/widget.js'></script>
        <script type='text/javascript' src='http://cdn.innity.net/admanager.js' />
      </Head>
      <body>
        <div className='root' style={{ overflow: 'hidden' }}>
          <Main />
        </div>
        <NextScript />
      </body>
      </html>
    )
  }
}
