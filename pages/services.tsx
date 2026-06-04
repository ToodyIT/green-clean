import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useServicesTranslation } from "../src/i18n/useAppTranslation";
import { loadTranslations } from "../src/i18n/loadTranslations";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { SEO } from "../src/components/SEO";

const Services = dynamic(
  () => import("../src/components/Services").then((m) => m.Services),
  { ssr: true }
);
const CookieConsent = dynamic(
  () => import("../src/components/CookieConsent").then((m) => m.CookieConsent),
  { ssr: false }
);

export default function ServicesPage() {
  const { t } = useServicesTranslation();
  return (
    <div className="min-h-screen">
      <SEO
        title={t("services.title")}
        description={t("services.description")}
      />
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
      ...(await loadTranslations(locale)),
    },
  };
};
