import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Services } from "../src/components/Services";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { SEO } from "../src/components/SEO";

export default function ServicesPage() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen">
      <SEO title={t("services.title")} description={t("services.description")} />
      <Header />
      <main>
        <Services />
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
