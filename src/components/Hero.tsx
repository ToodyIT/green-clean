import React from "react";
import { useRouter } from "next/router";
import { useHomeSectionsTranslation } from "../i18n/useAppTranslation";
import { twJoin } from "tailwind-merge";
import { Button } from "./ui/button";
import { CheckCircle, ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionBackground } from "./SectionBackground";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useHomeSectionsTranslation();
  const router = useRouter();
  const locale = router.locale || "cs";
  const isLongTitleLocale = locale === "ru" || locale === "uk";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-50">
      <SectionBackground variant="light" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0Y2ExMzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10 py-8 sm:py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            {/* Badge with glassmorphism */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/95 border border-green-200 rounded-full mb-4 sm:mb-6 lg:mb-8 shadow-lg hover:bg-white transition-colors duration-300 group">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:rotate-12 transition-transform" />
              <span className="text-xs sm:text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("hero.badge")}
              </span>
            </div>

            <h1
              className={twJoin(
                "mb-3 sm:mb-4 lg:mb-6 leading-tight text-gray-900",
                isLongTitleLocale
                  ? "text-[2rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
                  : "text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem]"
              )}
            >
              <span className="block whitespace-nowrap">{t("hero.title")}</span>
              <span className="block whitespace-nowrap bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* Feature Cards with glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
              {[
                {
                  icon: CheckCircle,
                  title: t("hero.certifiedStaff"),
                  desc: t("hero.certifiedStaffDesc"),
                  gradient: "from-green-500 to-emerald-600",
                },
                {
                  icon: Zap,
                  title: t("hero.ecoFriendly"),
                  desc: t("hero.ecoFriendlyDesc"),
                  gradient: "from-lime-500 to-green-600",
                },
                {
                  icon: Star,
                  title: t("hero.liabilityInsurance"),
                  desc: t("hero.liabilityInsuranceDesc"),
                  color: "#FFA826",
                },
                {
                  icon: Sparkles,
                  title: t("hero.flexibleScheduling"),
                  desc: t("hero.flexibleSchedulingDesc"),
                  color: "#FFB84D",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl sm:rounded-2xl"
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                      item.gradient ? `bg-gradient-to-br ${item.gradient}` : ""
                    }`}
                    style={
                      item.color
                        ? {
                            background: `linear-gradient(to bottom right, ${item.color}, ${item.color}dd)`,
                          }
                        : {}
                    }
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base text-gray-900 mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-105 transition-all duration-300 border-0"
                onClick={() => onNavigate?.("contact")}
              >
                {t("common.freeQuote")}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-xl bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-green-600 hover:scale-105 transition-all duration-300"
                onClick={() => onNavigate?.("services")}
              >
                {t("hero.ourServices")}
              </Button>
            </div>
          </div>

          {/* Image with modern effects — 80% of column width (20% smaller than original) */}
          <div className="relative hidden lg:block">
            <div className="relative ml-auto w-[80%]">
              {/* Glow effect */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                <ImageWithFallback
                  src="/images/homepage-hero.jpg"
                  alt="GreenClean — profesionální úklid kanceláří"
                  width={1024}
                  height={576}
                  priority
                  sizes="(max-width: 1024px) 0px, 40vw"
                  className="w-full h-full object-cover aspect-[16/9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>

              {/* Floating stats card with glassmorphism */}
              <div className="absolute -bottom-8 -left-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("hero.satisfiedClients")}
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  <div className="text-center">
                    <div
                      className="text-4xl bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #FFA826, #E59518)",
                      }}
                    >
                      3+
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("hero.yearsOfExperience")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-green-600/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-green-600/50 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
