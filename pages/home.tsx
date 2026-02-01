import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { HomeCleaningPage } from "../src/components/HomeCleaningPage";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";

export default function HomeCleaningPageRoute() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    const path = page === "homepage" ? "/" : `/${page}`;
    router.push(path);
  };

  return (
    <div className="min-h-screen">
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
