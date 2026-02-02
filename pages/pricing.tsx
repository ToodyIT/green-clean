import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Pricing } from "../src/components/Pricing";
import { Contact } from "../src/components/Contact";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { SEO } from "../src/components/SEO";

export default function PricingPage() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen">
      <SEO title={t("pricing.title")} description={t("pricing.description")} />
      <Header />
      <main>
        <Pricing />
        <Contact />
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
