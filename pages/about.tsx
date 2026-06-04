import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useHomeSectionsTranslation } from "../src/i18n/useAppTranslation";
import { loadTranslations } from "../src/i18n/loadTranslations";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { SEO } from "../src/components/SEO";

const About = dynamic(
  () => import("../src/components/About").then((m) => m.About),
  { ssr: true }
);
const Contact = dynamic(
  () => import("../src/components/Contact").then((m) => m.Contact),
  { ssr: true }
);
const CookieConsent = dynamic(
  () => import("../src/components/CookieConsent").then((m) => m.CookieConsent),
  { ssr: false }
);

export default function AboutPage() {
  const { t } = useHomeSectionsTranslation();
  return (
    <div className="min-h-screen">
      <SEO title={t("about.title")} description={t("about.description1")} />
      <Header />
      <main>
        <About />
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
