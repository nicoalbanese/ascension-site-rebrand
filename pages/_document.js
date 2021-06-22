// import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Cookies from "js-cookie";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name='title' content='Ascension | The UK Seed Fund' />
          <meta
            name='description'
            content='Ascension is an early-stage VC built by exited entrepreneurs to back the next generation of tech and impact founders'
          />

          {/* <!-- Open Graph / Facebook --/> */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.ascension.vc/' />
          <meta property='og:title' content='Ascension | The UK Seed Fund' />
          <meta
            property='og:description'
            content='Ascension is an early-stage VC built by exited entrepreneurs to back the next generation of tech and impact founders'
          />
          <meta
            property='og:image'
            content='https://ascension.vc/_next/image?url=%2Fimages%2Fascension-meta-image.png&w=3840&q=75'
          />

          {/* <!-- Twitter --/> */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://www.ascension.vc/' />
          <meta
            property='twitter:title'
            content='Ascension | The UK Seed Fund'
          />
          <meta
            property='twitter:description'
            content='Ascension is an early-stage VC built by exited entrepreneurs to back the next generation of tech and impact founders'
          />
          <meta
            property='twitter:image'
            content='https://ascension.vc/_next/image?url=%2Fimages%2Fascension-meta-image.png&w=3840&q=75'
          />
          <meta
            name='keywords'
            content='Ascension, UK, Seed, Fund, Venture, Capital, pre-Seed, SEIS, EIS, Fair, By, Design, FBD'
          />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='language' content='English' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#2d2d41' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#f4ebe5' />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-486H7R3NRT'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-486H7R3NRT');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
