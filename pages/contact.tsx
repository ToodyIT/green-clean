import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useContactTranslation } from "../src/i18n/useAppTranslation";
import { loadTranslations } from "../src/i18n/loadTranslations";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { SEO } from "../src/components/SEO";

const Contact = dynamic(
  () => import("../src/components/Contact").then((m) => m.Contact),
  { ssr: true }
);
const CookieConsent = dynamic(
  () => import("../src/components/CookieConsent").then((m) => m.CookieConsent),
  { ssr: false }
);

export default function ContactPage() {
  const { t } = useContactTranslation();
  return (
    <div className="min-h-screen">
      <SEO title={t("contact.title")} description={t("contact.description")} />
      <Header />
      <main>
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
      ...(await loadTranslations(locale)),
    },
  };
};
