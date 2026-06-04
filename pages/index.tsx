import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useHomePageTranslation } from "../src/i18n/useAppTranslation";
import { loadTranslations } from "../src/i18n/loadTranslations";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { SEO } from "../src/components/SEO";
import { SectionBackground } from "../src/components/SectionBackground";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { Button } from "../src/components/ui/button";
import { ArrowRight } from "lucide-react";
import { navigateToContactForm } from "../src/utils/navigateToContactForm";

const Services = dynamic(
  () => import("../src/components/Services").then((m) => m.Services),
  { ssr: true }
);
const Partners = dynamic(
  () => import("../src/components/Partners").then((m) => m.Partners),
  { ssr: true }
);
const About = dynamic(
  () => import("../src/components/About").then((m) => m.About),
  { ssr: true }
);
const References = dynamic(
  () => import("../src/components/References").then((m) => m.References),
  { ssr: true }
);
const FAQ = dynamic(
  () => import("../src/components/FAQ").then((m) => m.FAQ),
  { ssr: true }
);
const CookieConsent = dynamic(
  () => import("../src/components/CookieConsent").then((m) => m.CookieConsent),
  { ssr: false }
);

export default function HomePage() {
  const { t } = useHomePageTranslation();
  const router = useRouter();

  const handleHeroNavigate = useCallback(
    (page: string) => {
      if (page === "contact") navigateToContactForm(router);
      if (page === "services") router.push("/services");
    },
    [router]
  );

  return (
    <div className="min-h-screen">
      <SEO
        title={`${t("hero.title")} ${t("hero.titleHighlight")}`}
        description={t("hero.description")}
      />
      <Header />
      <main>
        <Hero onNavigate={handleHeroNavigate} />
        <Partners />
        <Services />
        <section className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
          <SectionBackground variant="cta" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/25 border border-white/30 rounded-full mb-4 sm:mb-6 lg:mb-8 shadow-lg">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#FFA826" }}
                ></div>
                <span className="text-xs sm:text-sm text-white">
                  {t("common.readyToStart")}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white mb-3 sm:mb-4 lg:mb-6">
                {t("common.getFreeQuoteTitle")}
              </h2>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-green-50 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                {t("common.contactTodayQuote")}
              </p>

              <Button
                size="lg"
                className="bg-white hover:bg-gray-50 text-green-700 shadow-2xl hover:shadow-white/50 hover:scale-105 sm:hover:scale-110 transition-all duration-300 border-0 text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-7"
                onClick={() => navigateToContactForm(router)}
              >
                {t("common.freeQuote")}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
        <About />
        <References />
        <FAQ />
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
