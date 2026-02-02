import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { References } from "../src/components/References";
import { Contact } from "../src/components/Contact";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { SEO } from "../src/components/SEO";

export default function ReferencesPage() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen">
      <SEO title={t("references.title")} description={t("references.description")} />
      <Header />
      <main>
        <References />
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
