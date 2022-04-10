import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700;800&display=swap" rel="stylesheet" />*/}

          {/*<link rel="preconnect" href="https://intms.mo.cloudinary.net" key="preconnect-cdn" />*/}
          {/*<link rel="dns-prefetch" href="https://intms.mo.cloudinary.net" key="dns-prefetch-cdn" />*/}

          {/*<meta name="theme-color" content={theme.colors.primary.DEFAULT} key="meta-theme-color" />*/}

          {/*<link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}apple-touch-icon.png`} key="icon-apple-touch" />*/}
          {/*<link rel="icon" type="image/png" sizes="32x32" href={`${faviconPath}favicon-32x32.png`} key="icon-32" />*/}
          {/*<link rel="icon" type="image/png" sizes="16x16" href={`${faviconPath}favicon-16x16.png`} key="icon-16" />*/}
          {/*<link*/}
          {/*  rel="mask-icon"*/}
          {/*  href={`${faviconPath}safari-pinned-tab.svg`}*/}
          {/*  color={theme.colors.primary.DEFAULT}*/}
          {/*  key="icon-mask"*/}
          {/*/>*/}
          {/*<link rel="shortcut icon" href={`${faviconPath}favicon.ico`} key="icon-shortcut" />*/}
          {/*<meta name="msapplication-TileColor" content={theme.colors.primary.DEFAULT} key="ms-tile" />*/}
          {/*<meta name="msapplication-config" content={`${faviconPath}browserconfig.xml`} key="ms-config" />*/}
        </Head>
        <body className="flex items-center justify-center min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
