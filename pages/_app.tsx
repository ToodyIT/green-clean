import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { StructuredData } from "../src/components/StructuredData";
import "../src/styles/globals.css";
import "../src/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StructuredData />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
