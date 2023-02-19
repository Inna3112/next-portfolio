import Document, {
  Html, Head, Main, NextScript
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            id="gtm"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TDV8QPX');`
            }}
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDV8QPX"
                height="0" width="0" style="display:none;visibility:hidden"
            />`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
