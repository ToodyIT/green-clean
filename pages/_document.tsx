import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

const DEFAULT_LOCALE = "cs";

export default function Document({
  locale,
}: {
  locale?: string;
}) {
  const lang = locale ?? DEFAULT_LOCALE;
  return (
    <Html lang={lang}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#16a34a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const locale = ctx.locale ?? DEFAULT_LOCALE;
  return { ...initialProps, locale };
};
