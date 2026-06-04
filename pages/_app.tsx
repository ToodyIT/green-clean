import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { StructuredData } from "../src/components/StructuredData";
import { MobileMenuProvider } from "../src/context/MobileMenuContext";
import "../src/styles/globals.css";
import "../src/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileMenuProvider>
      <StructuredData />
      <Component {...pageProps} />
    </MobileMenuProvider>
  );
}

export default appWithTranslation(MyApp);
