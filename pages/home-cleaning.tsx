import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useHomeCleaningTranslation } from "../src/i18n/useAppTranslation";
import { loadTranslations } from "../src/i18n/loadTranslations";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { SEO } from "../src/components/SEO";

const HomeCleaningPage = dynamic(
  () =>
    import("../src/components/HomeCleaningPage").then((m) => m.HomeCleaningPage),
  { ssr: true }
);
const CookieConsent = dynamic(
  () => import("../src/components/CookieConsent").then((m) => m.CookieConsent),
  { ssr: false }
);

export default function HomeCleaningPageRoute() {
  const { t } = useHomeCleaningTranslation();
  return (
    <div className="min-h-screen">
      <SEO
        title={t("serviceData.home.title")}
        description={t("serviceData.home.description")}
      />
      <Header />
      <main>
        <HomeCleaningPage />
      </main>
      <Footer />
      <FloatingActionButton />
      <CookieConsent />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(locale)),
    },
  };
};
