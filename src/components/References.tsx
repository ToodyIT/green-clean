import React from "react";
import { useHomeSectionsTranslation } from "../i18n/useAppTranslation";
import { Card } from "./ui/card";
import {
  Star,
  Quote,
  Award,
  Building2,
  Hammer,
  Rocket,
  Hotel,
  Briefcase,
  Home,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { SectionBackground } from "./SectionBackground";

export function References() {
  const { t } = useHomeSectionsTranslation();
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });

  const testimonials = [
    {
      name: t("references.testimonial1Name"),
      position: t("references.testimonial1Position"),
      rating: 5,
      text: t("references.testimonial1Text"),
      initials: "JN",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: t("references.testimonial2Name"),
      position: t("references.testimonial2Position"),
      rating: 5,
      text: t("references.testimonial2Text"),
      initials: "MS",
      gradient: "from-lime-500 to-green-500",
    },
    {
      name: t("references.testimonial3Name"),
      position: t("references.testimonial3Position"),
      rating: 5,
      text: t("references.testimonial3Text"),
      initials: "PD",
      gradient: "from-teal-500 to-green-500",
    },
    {
      name: t("references.testimonial4Name"),
      position: t("references.testimonial4Position"),
      rating: 5,
      text: t("references.testimonial4Text"),
      initials: "EH",
      customColor: "#FFA826",
    },
    {
      name: t("references.testimonial5Name"),
      position: t("references.testimonial5Position"),
      rating: 5,
      text: t("references.testimonial5Text"),
      initials: "TP",
      customColor: "#FFB84D",
    },
    {
      name: t("references.testimonial6Name"),
      position: t("references.testimonial6Position"),
      rating: 5,
      text: t("references.testimonial6Text"),
      initials: "LK",
      customColor: "#E59518",
    },
  ];

  const clients = [
    t("references.client1"),
    t("references.client2"),
    t("references.client3"),
    t("references.client4"),
    t("references.client5"),
    t("references.client6"),
    t("references.client7"),
    t("references.client8"),
  ];

  const clientIcons = [
    Building2,
    Hammer,
    Rocket,
    Hotel,
    Briefcase,
    Home,
    Heart,
    ShoppingBag,
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <SectionBackground variant="light" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          ref={headerAnimation.ref}
        >
          <div
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #FFE4B5, #FFD9A0)",
              borderWidth: "1px",
              borderColor: "#FFA826",
            }}
          >
            <Star
              className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
              style={{ color: "#E59518" }}
            />
            <span
              className="text-xs sm:text-sm bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #E59518, #FFA826)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {t("references.title")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
            {t("references.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("references.description")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 ${
                  testimonial.gradient
                    ? `bg-gradient-to-r ${testimonial.gradient}`
                    : ""
                }`}
                style={
                  testimonial.customColor
                    ? {
                        background: `linear-gradient(to right, ${testimonial.customColor}, ${testimonial.customColor}dd)`,
                      }
                    : {}
                }
              ></div>

              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100 group-hover:text-gray-200 transition-colors" />

              <div className="relative">
                {/* Avatar and info */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${
                      testimonial.gradient
                        ? `bg-gradient-to-br ${testimonial.gradient}`
                        : ""
                    }`}
                    style={
                      testimonial.customColor
                        ? {
                            background: `linear-gradient(to bottom right, ${testimonial.customColor}, ${testimonial.customColor}dd)`,
                          }
                        : {}
                    }
                  >
                    <span className="text-white text-lg">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      style={{ fill: "#FFA826", color: "#FFA826" }}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute bottom-0 right-0 w-24 h-24 opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity ${
                  testimonial.gradient
                    ? `bg-gradient-to-br ${testimonial.gradient}`
                    : ""
                }`}
                style={
                  testimonial.customColor
                    ? {
                        background: `linear-gradient(to bottom right, ${testimonial.customColor}, ${testimonial.customColor}88)`,
                      }
                    : {}
                }
              ></div>
            </Card>
          ))}
        </div>
      </div>

      {/* Clients - Full Width Section */}
      <div className="mb-16 w-full">
        {/* Background with gradient */}
        <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 overflow-hidden">
          <SectionBackground variant="lightSm" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-green-200 rounded-full mb-4 shadow-lg">
                <Star
                  className="w-4 h-4"
                  style={{ color: "#FFA826", fill: "#FFA826" }}
                />
                <span className="text-sm text-gray-900">
                  {t("references.ourClients")}
                </span>
              </div>
              <h3 className="text-4xl text-gray-900">
                {t("references.trustUs")}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 px-4 py-6 max-w-6xl mx-auto">
            {clients.map((client, index) => {
              const IconComponent = clientIcons[index];
              return (
                <div
                  key={index}
                  className="flex min-w-[200px] flex-shrink-0 items-center justify-center gap-3 rounded-2xl border-2 border-green-200 bg-white px-6 py-5 shadow-md transition-shadow duration-300 hover:border-green-500 hover:shadow-lg sm:min-w-[220px] sm:px-8 sm:py-6"
                >
                  <IconComponent
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: "#FFA826" }}
                  />
                  <span className="text-center text-gray-800">{client}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <Card className="relative p-12 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 border-0 text-white shadow-2xl overflow-hidden">
            <div className="relative text-center">
              <Award
                className="w-20 h-20 mx-auto mb-6"
                style={{ color: "#FFB84D" }}
              />
              <div className="text-6xl mb-4">98%</div>
              <div className="text-3xl mb-6">
                {t("references.customerSatisfaction")}
              </div>
              <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto">
                {t("references.satisfactionDescription")}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
