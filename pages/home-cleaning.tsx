import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { HomeCleaningPage } from "../src/components/HomeCleaningPage";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { SEO } from "../src/components/SEO";

export default function HomeCleaningPageRoute() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen">
      <SEO title={t("serviceData.home.title")} description={t("serviceData.home.description")} />
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
      ...(await serverSideTranslations(locale ?? "cs", ["common"])),
    },
  };
};
