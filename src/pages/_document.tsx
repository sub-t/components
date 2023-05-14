import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '/stitches.config';

export default function MyDocument() {
  return (
    <Html lang="ja">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
