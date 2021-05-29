import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { ServerStyleSheet } from 'styled-components';

import DefaultTypography from '../utils/typography';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {this.props.styleTags}
          <TypographyStyle typography={DefaultTypography} />
          <GoogleFont typography={DefaultTypography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}