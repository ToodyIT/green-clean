import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useHomeSectionsTranslation } from "../src/i18n/useAppTranslation";
import { loadTranslations } from "../src/i18n/loadTranslations";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { SEO } from "../src/components/SEO";

const References = dynamic(
  () => import("../src/components/References").then((m) => m.References),
  { ssr: true }
);
const CookieConsent = dynamic(
  () => import("../src/components/CookieConsent").then((m) => m.CookieConsent),
  { ssr: false }
);

export default function ReferencesPage() {
  const { t } = useHomeSectionsTranslation();
  return (
    <div className="min-h-screen">
      <SEO
        title={t("references.title")}
        description={t("references.description")}
      />
      <Header />
      <main>
        <References />
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
