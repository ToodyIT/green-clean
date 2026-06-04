import React from "react";

import { useServicesTranslation } from "../i18n/useAppTranslation";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Building2,
  Home,
  Sofa,
  HardHat,
  Building,
  Warehouse,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionBackground } from "./SectionBackground";
import { useScrollAnimation, animations } from "../hooks/useScrollAnimation";
import { useRouter } from "next/router";

interface ServiceCardProps {
  service: {
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    image: string;
    gradient?: string;
    customGradient?: string;
    priceFrom: string;
    priceTo: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { t } = useServicesTranslation();
  const router = useRouter();
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });
  const Icon = service.icon;

  return (
    <div
      ref={cardAnimation.ref}
      style={animations.fadeInUp(cardAnimation.isVisible, index * 0.1)}
      className="h-full flex flex-col"
    >
      <Card
        className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white hover:-translate-y-2 h-full flex flex-col"
        onClick={() => router.push(`/${service.id}`)}
      >
        {/* Image — height via inline style (h-48 is not in compiled CSS) */}
        <div
          className="relative shrink-0 overflow-hidden"
          style={{ height: "11.75rem" }}
        >
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500 ${
              service.gradient
                ? `bg-gradient-to-br ${service.gradient}`
                : ""
            }`}
            style={
              service.customGradient
                ? { backgroundImage: service.customGradient }
                : {}
            }
          ></div>

          {/* Icon badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <Icon className="h-7 w-7 text-white transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-6">
          {/* Gradient line */}
          <div
            className={`absolute top-0 left-0 right-0 h-1 ${
              service.gradient
                ? `bg-gradient-to-r ${service.gradient}`
                : ""
            }`}
            style={
              service.customGradient
                ? { backgroundImage: service.customGradient }
                : {}
            }
          ></div>

          <h3 className="mb-3 text-xl text-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent">
            {service.title}
          </h3>
          <p className="mb-4 flex-1 leading-relaxed text-gray-600">
            {service.description}
          </p>

          {/* Price - Minimalist */}
          <div className="mb-6">
            <div className="flex items-baseline gap-1.5 text-gray-500">
              <span className="text-xs">{t("common.from")}</span>
              <span className="text-base text-gray-700">
                {service.priceFrom}
              </span>
              <span className="text-xs">{t("common.to")}</span>
              <span className="text-base text-gray-700">
                {service.priceTo}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto flex items-center text-green-600 transition-colors group-hover:text-emerald-600">
            <span className="mr-2">{t("common.learnMore")}</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>

        {/* Corner accent */}
        <div
          className={`absolute bottom-0 right-0 h-24 w-24 opacity-5 rounded-tl-full transition-opacity group-hover:opacity-10 ${
            service.gradient
              ? `bg-gradient-to-br ${service.gradient}`
              : ""
          }`}
          style={
            service.customGradient
              ? { backgroundImage: service.customGradient }
              : {}
          }
        ></div>
      </Card>
    </div>
  );
}

export function Services() {
  const { t } = useServicesTranslation();
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuredAnimation = useScrollAnimation({ threshold: 0.15 });
  const router = useRouter();

  const services = [
    {
      id: "home-cleaning",
      icon: Home,
      title: t("services.homeCleaning"),
      description: t("services.homeCleaningDesc"),
      image:
        "https://images.unsplash.com/photo-1758272422189-b10f36fd4ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGhvbWUlMjBhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzYyMzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      featured: true,
      priceFrom: "1 990 Kč",
      priceTo: "8 990 Kč",
    },
    {
      id: "office",
      icon: Building2,
      title: t("services.officeCleaning"),
      description: t("services.officeCleaningDesc"),
      image:
        "https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      priceFrom: "25 Kč/m²",
      priceTo: "40 Kč/m²",
    },
    {
      id: "airbnb",
      icon: Building,
      title: t("services.airbnbCleaning"),
      description: t("services.airbnbCleaningDesc"),
      image:
        "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-lime-500 via-green-500 to-emerald-500",
      priceFrom: "1 500 Kč",
      priceTo: "4 500 Kč",
    },
    {
      id: "furniture",
      icon: Sofa,
      title: t("services.furnitureCleaning"),
      description: t("services.furnitureCleaningDesc"),
      image:
        "https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMHNvZmF8ZW58MXx8fHwxNzYxMTQ0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      customGradient: "linear-gradient(to right, #FFA826, #FFB84D, #E59518)",
      priceFrom: "500 Kč",
      priceTo: "3 500 Kč",
    },
    {
      id: "renovation",
      icon: HardHat,
      title: t("services.renovationCleaning"),
      description: t("services.renovationCleaningDesc"),
      image:
        "https://images.unsplash.com/photo-1661746785480-439c1a4b8254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjExNDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      customGradient: "linear-gradient(to right, #FFB84D, #FFA826, #E59518)",
      priceFrom: "35 Kč/m²",
      priceTo: "60 Kč/m²",
    },
    {
      id: "development",
      icon: Building,
      title: t("services.developmentCleaning"),
      description: t("services.developmentCleaningDesc"),
      image:
        "https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-teal-500 via-green-500 to-lime-500",
      priceFrom: "30 Kč/m²",
      priceTo: "50 Kč/m²",
    },
    {
      id: "buildings",
      icon: Warehouse,
      title: t("services.buildingCleaning"),
      description: t("services.buildingCleaningDesc"),
      image:
        "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      customGradient: "linear-gradient(to right, #E59518, #FFA826, #CC8A1C)",
      priceFrom: "15 Kč/m²",
      priceTo: "30 Kč/m²",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <SectionBackground variant="light" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div
          ref={headerAnimation.ref}
          style={animations.fadeInUp(headerAnimation.isVisible)}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 sm:mb-6 shadow-lg border border-green-200">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            <span className="text-xs sm:text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {t("services.title")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
            {t("services.subtitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Featured Service - Full Width */}
        {services[0] &&
          (() => {
            const service = services[0];
            const Icon = service.icon;
            return (
              <div
                ref={featuredAnimation.ref}
                style={animations.scaleIn(featuredAnimation.isVisible, 0.1)}
              >
                <Card
                  key={service.id}
                  className="group relative mb-16 cursor-pointer overflow-hidden border-2 border-green-200 bg-gradient-to-br from-white to-green-50/30 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-green-500/30"
                  onClick={() => router.push(`/${service.id}`)}
                >
                  <div className="grid items-stretch gap-0 lg:grid-cols-2">
                    {/* Image with gradient overlay */}
                    <div className="relative h-80 overflow-hidden lg:h-auto">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-80 ${
                          service.gradient
                            ? `bg-gradient-to-br ${service.gradient}`
                            : ""
                        }`}
                        style={
                          service.customGradient
                            ? { backgroundImage: service.customGradient }
                            : {}
                        }
                      ></div>

                      {/* Icon badge */}
                      <div className="absolute top-6 left-6 z-10">
                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <Icon className="h-10 w-10 text-white transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Featured badge */}
                      <div className="absolute top-6 right-6 z-10">
                        <div className="rounded-full border border-white/30 bg-white/20 px-4 py-2 shadow-lg backdrop-blur-md">
                          <span className="text-sm text-white">
                            ★ {t("services.mostPopular")}
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col justify-center p-8 lg:p-12">
                      {/* Gradient line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 ${
                          service.gradient
                            ? `bg-gradient-to-r ${service.gradient}`
                            : ""
                        }`}
                        style={
                          service.customGradient
                            ? { backgroundImage: service.customGradient }
                            : {}
                        }
                      ></div>

                      <h3 className="mb-4 text-3xl text-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent lg:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed text-gray-600">
                        {service.description}
                      </p>

                      {/* Price - Minimalist */}
                      <div className="mb-8">
                        <div className="flex items-baseline gap-2 text-gray-500">
                          <span className="text-sm">{t("common.from")}</span>
                          <span className="text-xl text-gray-700">
                            {service.priceFrom}
                          </span>
                          <span className="text-sm">{t("common.to")}</span>
                          <span className="text-xl text-gray-700">
                            {service.priceTo}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-lg text-green-600 transition-colors group-hover:text-emerald-600">
                        <span className="mr-2">{t("common.learnMore")}</span>
                        <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`absolute bottom-0 right-0 h-32 w-32 opacity-5 rounded-tl-full transition-opacity group-hover:opacity-10 ${
                      service.gradient
                        ? `bg-gradient-to-br ${service.gradient}`
                        : ""
                    }`}
                    style={
                      service.customGradient
                        ? { backgroundImage: service.customGradient }
                        : {}
                    }
                  ></div>
                </Card>
              </div>
            );
          })()}

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-slate-50 to-white px-6 py-2 text-sm text-gray-500">
              {t("services.otherServices")}
            </span>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="mb-12 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(1).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-105 transition-all duration-300 border-0 text-lg px-8 py-6"
            onClick={() => router.push("/pricing")}
          >
            {t("common.freeQuote")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
