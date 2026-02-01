import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { About } from "../src/components/About";
import { Contact } from "../src/components/Contact";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";

export default function AboutPage() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    const path = page === "homepage" ? "/" : `/${page}`;
    router.push(path);
  };

  return (
    <div className="min-h-screen">
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
      ...(await serverSideTranslations(locale ?? "cs", ["common"])),
    },
  };
};
