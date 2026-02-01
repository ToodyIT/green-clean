import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { Services } from "../src/components/Services";
import { About } from "../src/components/About";
import { References } from "../src/components/References";
import { FAQ } from "../src/components/FAQ";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { Button } from "../src/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Partners } from "../src/components/Partners";

export default function HomePage() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Services />
        <section className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div
              className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"
              style={{ backgroundColor: "rgba(255, 168, 38, 0.2)" }}
            ></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-4 sm:mb-6 lg:mb-8 shadow-lg">
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
                onClick={() => router.push("/contact")}
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
      ...(await serverSideTranslations(locale ?? "cs", ["common"])),
    },
  };
};
