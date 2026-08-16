import React, { useState } from "react";
import { useHomeCleaningTranslation } from "../i18n/useAppTranslation";
import { ensureStringArray } from "../utils/i18nArrays";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Home,
  Sparkles,
  CheckCircle2,
  Clock,
  Shield,
  Heart,
  Star,
  ArrowRight,
  Leaf,
  Users,
  Award,
  MessageCircle,
  Calendar,
  Zap,
  Target,
  TrendingUp,
  ThumbsUp,
  HelpCircle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Contact } from "./Contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  CONTACT_EMAIL,
  CONTACT_FORM_ID,
  CONTACT_MAILTO,
} from "../constants/contact";
import { PricingIntroThenExtras } from "./PricingFeatureGroups";

export function HomeCleaningPage() {
  const { t } = useHomeCleaningTranslation();
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "onetime">(
    "weekly"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          style={{ backgroundColor: "#FFA826" }}
        ></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
                <Home className="w-4 h-4 text-green-600" />
                <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {t("homeCleaning.mostPopularService")}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                {t("homeCleaning.title")}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t("homeCleaning.description")}
              </p>

              {/* Features badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-green-100">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    {t("homeCleaning.insured")}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-green-100">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    {t("homeCleaning.ecofriendly")}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-green-100">
                  <Star className="w-5 h-5" style={{ color: "#FFA826" }} />
                  <span className="text-sm text-gray-700">
                    {t("homeCleaning.rating")}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-105 transition-all duration-300 border-0 text-lg px-8 py-6"
                  onClick={() =>
                    document
                      .getElementById(CONTACT_FORM_ID)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("common.getFreeQuote")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  onClick={() =>
                    document
                      .getElementById("pricing-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("common.viewPrices")}
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648475235027-21cd0ed83671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIzNzYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral"
                  alt="Čistý moderní domov"
                  width={800}
                  height={600}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-[600px] object-cover"
                />
                {/* Glassmorphism overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl mb-1">500+</div>
                      <div className="text-sm text-gray-600">
                        {t("homeCleaning.satisfiedCustomers")}
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-2 border-white"></div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 border-2 border-white"></div>
                      <div
                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-sm"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #FFB84D, #FFA826)",
                        }}
                      >
                        <span className="text-white">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="hidden md:block absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border border-green-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">
                      {t("homeCleaning.quality")}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current"
                          style={{ color: "#FFA826" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing-section"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("homeCleaning.transparentPricing")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              {t("homeCleaning.chooseIdealPackage")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              {t("homeCleaning.transparentPricingDesc")}
            </p>

            {/* Tabs */}
            <div className="inline-flex bg-gray-100 rounded-full p-1 shadow-inner mb-12">
              <button
                onClick={() => setActiveTab("weekly")}
                className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                  activeTab === "weekly"
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t("pricing.lightCleaning")}
              </button>
              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                  activeTab === "monthly"
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t("pricing.deepCleaning")}
              </button>
              <button
                onClick={() => setActiveTab("onetime")}
                className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                  activeTab === "onetime"
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t("pricing.postRenovation")}
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activeTab === "weekly" &&
              [
                {
                  name: t("homeCleaning.pricingPlans.weekly.plan1.name"),
                  size: "20–40 m²",
                  priceRange: "800–1100",
                  time: t("homeCleaning.pricingPlans.weekly.plan1.time"),
                  features: ensureStringArray(
                    t("homeCleaning.pricingPlans.weekly.plan1.features", {
                      returnObjects: true,
                    })
                  ),
                },
                {
                  name: t("homeCleaning.pricingPlans.weekly.plan2.name"),
                  size: "45–70 m²",
                  priceRange: "1200–1700",
                  time: t("homeCleaning.pricingPlans.weekly.plan2.time"),
                  features: ensureStringArray(
                    t("homeCleaning.pricingPlans.weekly.plan2.features", {
                      returnObjects: true,
                    })
                  ),
                },
                {
                  name: t("homeCleaning.pricingPlans.weekly.plan3.name"),
                  size: "70–100 m²",
                  priceRange: "1600–2100",
                  time: t("homeCleaning.pricingPlans.weekly.plan3.time"),
                  features: ensureStringArray(
                    t("homeCleaning.pricingPlans.weekly.plan3.features", {
                      returnObjects: true,
                    })
                  ),
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-2 border-gray-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="p-8">
                    {/* Time badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
                      <Clock className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {plan.time}
                      </span>
                    </div>

                    <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">{plan.size}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl text-gray-900">
                          {plan.priceRange}
                        </span>
                        <span className="text-xl text-gray-600">Kč</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {t("homeCleaning.perLightCleaning")}
                      </div>
                    </div>

                    <Button
                      className="w-full mb-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30"
                      onClick={() =>
                        document
                          .getElementById(CONTACT_FORM_ID)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {t("common.orderService")}
                    </Button>

                    <div className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

            {activeTab === "monthly" &&
              (
                [
                  {
                    planKey: "plan1" as const,
                    name: t("homeCleaning.pricingPlans.monthly.plan1.name"),
                    size: "20–40 m²",
                    priceRange: "1500–2200",
                    time: t("homeCleaning.pricingPlans.monthly.plan1.time"),
                  },
                  {
                    planKey: "plan2" as const,
                    name: t("homeCleaning.pricingPlans.monthly.plan2.name"),
                    size: "45–70 m²",
                    priceRange: "2000–3200",
                    time: t("homeCleaning.pricingPlans.monthly.plan2.time"),
                  },
                  {
                    planKey: "plan3" as const,
                    name: t("homeCleaning.pricingPlans.monthly.plan3.name"),
                    size: "70–100 m²",
                    priceRange: "2500–4000",
                    time: t("homeCleaning.pricingPlans.monthly.plan3.time"),
                  },
                ] as const
              ).map((plan, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-2 border-gray-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="p-8">
                    {/* Time badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
                      <Clock className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {plan.time}
                      </span>
                    </div>

                    <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">{plan.size}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl text-gray-900">
                          {plan.priceRange}
                        </span>
                        <span className="text-xl text-gray-600">Kč</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {t("homeCleaning.perDeepCleaning")}
                      </div>
                    </div>

                    <Button
                      className="w-full mb-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30"
                      onClick={() =>
                        document
                          .getElementById(CONTACT_FORM_ID)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {t("common.orderService")}
                    </Button>

                    <PricingIntroThenExtras
                      tone="emerald"
                      intro={t("homeCleaning.pricingBodyIncludesLight")}
                      extraHeading={t(
                        "homeCleaning.pricingExtraHeadingGeneral"
                      )}
                      items={ensureStringArray(
                        t(
                          `homeCleaning.pricingPlans.monthly.${plan.planKey}.features`,
                          { returnObjects: true }
                        )
                      )}
                    />
                  </div>
                </Card>
              ))}

            {activeTab === "onetime" &&
              (
                [
                  {
                    planKey: "plan1" as const,
                    name: t("homeCleaning.pricingPlans.onetime.plan1.name"),
                    size: "20–40 m²",
                    priceRange: "2500–3500",
                    time: t("homeCleaning.pricingPlans.onetime.plan1.time"),
                  },
                  {
                    planKey: "plan2" as const,
                    name: t("homeCleaning.pricingPlans.onetime.plan2.name"),
                    size: "45–70 m²",
                    priceRange: "3500–5500",
                    time: t("homeCleaning.pricingPlans.onetime.plan2.time"),
                  },
                  {
                    planKey: "plan3" as const,
                    name: t("homeCleaning.pricingPlans.onetime.plan3.name"),
                    size: "70–100 m²",
                    priceRange: "5000–6500",
                    time: t("homeCleaning.pricingPlans.onetime.plan3.time"),
                  },
                ] as const
              ).map((plan, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-2 border-gray-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="p-8">
                    {/* Time badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-4">
                      <Clock className="w-3.5 h-3.5 text-orange-600" />
                      <span className="text-xs bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        {plan.time}
                      </span>
                    </div>

                    <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">{plan.size}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl text-gray-900">
                          {plan.priceRange}
                        </span>
                        <span className="text-xl text-gray-600">Kč</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {t("homeCleaning.perPostRenovation")}
                      </div>
                    </div>

                    <Button
                      className="w-full mb-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30"
                      onClick={() =>
                        document
                          .getElementById(CONTACT_FORM_ID)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {t("common.orderService")}
                    </Button>

                    <PricingIntroThenExtras
                      tone="amber"
                      intro={t("homeCleaning.pricingBodyIncludesGeneral")}
                      extraHeading={t("homeCleaning.pricingExtraHeadingPost")}
                      items={ensureStringArray(
                        t(
                          `homeCleaning.pricingPlans.onetime.${plan.planKey}.features`,
                          { returnObjects: true }
                        )
                      )}
                    />
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <ThumbsUp className="w-5 h-5 text-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("homeCleaning.whyChooseUs")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              {t("homeCleaning.trustedByThousands")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("homeCleaning.combineProfessionalism")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: t("homeCleaning.fullyInsured"),
                description: t("homeCleaning.fullyInsuredDesc"),
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Users,
                title: t("homeCleaning.verifiedStaff"),
                description: t("homeCleaning.verifiedStaffDesc"),
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Leaf,
                title: t("homeCleaning.100Eco"),
                description: t("homeCleaning.100EcoDesc"),
                color: "from-green-500 to-lime-500",
              },
              {
                icon: Award,
                title: t("homeCleaning.guaranteedQuality"),
                description: t("homeCleaning.guaranteedQualityDesc"),
                color: "from-lime-500 to-green-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-8 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Corner accent */}
                <div
                  className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${item.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div
            className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"
            style={{ backgroundColor: "rgba(255, 168, 38, 0.2)" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-4 sm:mb-6 shadow-lg">
              <Target className="w-5 h-5 text-white" />
              <span className="text-sm text-white">
                {t("homeCleaning.howItWorks")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-white">
              {t("homeCleaning.simpleSteps")}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 items-stretch">
            {[
              {
                step: "01",
                icon: MessageCircle,
                title: t("homeCleaning.contactUs"),
                description: t("homeCleaning.contactUsDesc"),
              },
              {
                step: "02",
                icon: Calendar,
                title: t("homeCleaning.scheduleAppointment"),
                description: t("homeCleaning.scheduleAppointmentDesc"),
              },
              {
                step: "03",
                icon: Zap,
                title: t("homeCleaning.weClean"),
                description: t("homeCleaning.weCleanDesc"),
              },
              {
                step: "04",
                icon: Heart,
                title: t("homeCleaning.enjoyCleanliness"),
                description: t("homeCleaning.enjoyCleanlinessDesc"),
              },
            ].map((item, index) => (
              <div key={index} className="relative h-full flex flex-col min-w-0">
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-white/30"></div>
                )}

                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 sm:p-5 lg:p-6 hover:bg-white/15 transition-all duration-300 h-full flex flex-col min-h-0">
                  {/* Step number */}
                  <div className="text-4xl sm:text-5xl font-bold text-white/20 mb-2 sm:mb-3 flex-shrink-0">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg text-white mb-1.5 sm:mb-2 flex-shrink-0 break-words leading-tight">{item.title}</h3>
                  <p className="text-green-100 text-xs sm:text-sm leading-snug break-words">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("homeCleaning.ourWork")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              {t("homeCleaning.resultsTitlePart1")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("homeCleaning.resultsTitleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("homeCleaning.resultsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1648475235027-21cd0ed83671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIzNzYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: t("homeCleaning.gallery.modernLivingRoom"),
                description: t("homeCleaning.gallery.deepCleaning"),
              },
              {
                image:
                  "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzYyMzc2MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: t("homeCleaning.gallery.kitchenAfterRenovation"),
                description: t("homeCleaning.gallery.dustRemoval"),
              },
              {
                image:
                  "https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYyMzQ5NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: t("homeCleaning.gallery.ecoApproach"),
                description: t("homeCleaning.gallery.safeForFamily"),
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-green-100 text-sm">{item.description}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-lg">
                        {t("homeCleaning.gallery.satisfaction")}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-green-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <Star className="w-5 h-5" style={{ color: "#FFA826" }} />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("homeCleaning.testimonials.badge")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              {t("homeCleaning.testimonials.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("homeCleaning.testimonials.titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t("homeCleaning.testimonials.testimonial1Name"),
                role: t("homeCleaning.testimonials.testimonial1Role"),
                text: t("homeCleaning.testimonials.testimonial1Text"),
                rating: 5,
                avatar: "JS",
              },
              {
                name: t("homeCleaning.testimonials.testimonial2Name"),
                role: t("homeCleaning.testimonials.testimonial2Role"),
                text: t("homeCleaning.testimonials.testimonial2Text"),
                rating: 5,
                avatar: "PN",
              },
              {
                name: t("homeCleaning.testimonials.testimonial3Name"),
                role: t("homeCleaning.testimonials.testimonial3Role"),
                text: t("homeCleaning.testimonials.testimonial3Text"),
                rating: 5,
                avatar: "MK",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-500 p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: "#FFA826" }}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Decorative quote */}
                <div className="absolute top-4 right-4 text-6xl text-green-100 opacity-50">
                  &quot;
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{ backgroundColor: "#FFA826" }}
        ></div>

        <div className="container mx-auto px-8 lg:px-20 max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-lime-100 rounded-full mb-6 shadow-lg border border-green-200">
              <HelpCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                FAQ
              </span>
            </div>
            <h2 className="text-5xl text-gray-900 mb-6">
              {t("homeCleaning.faq.titlePart1")}{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {t("homeCleaning.faq.titlePart2")}
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              {t("homeCleaning.faq.description")}
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                question: t("homeCleaning.faq.q1"),
                answer: t("homeCleaning.faq.a1"),
              },
              {
                question: t("homeCleaning.faq.q2"),
                answer: t("homeCleaning.faq.a2"),
              },
              {
                question: t("homeCleaning.faq.q3"),
                answer: t("homeCleaning.faq.a3"),
              },
              {
                question: t("homeCleaning.faq.q4"),
                answer: t("homeCleaning.faq.a4"),
              },
              {
                question: t("homeCleaning.faq.q5"),
                answer: t("homeCleaning.faq.a5"),
              },
              {
                question: t("homeCleaning.faq.q6"),
                answer: t("homeCleaning.faq.a6"),
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <AccordionTrigger className="text-left hover:no-underline px-6 py-5 hover:bg-gradient-to-r hover:from-green-50 hover:to-lime-50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                  <div className="pl-12 pt-2">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-green-100 to-lime-100 rounded-3xl border-2 border-green-200">
              <p className="text-gray-700 mb-4">
                {t("homeCleaning.faq.moreQuestions")}
              </p>
              <a
                href={CONTACT_MAILTO}
                className="text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent hover:from-green-700 hover:to-emerald-700 transition-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}
