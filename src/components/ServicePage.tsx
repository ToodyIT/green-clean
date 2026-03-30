import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  CheckCircle,
  ArrowRight,
  Check,
  Shield,
  Award,
  Clock,
  Star,
  Sparkles,
  Zap,
  HelpCircle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Contact } from "./Contact";
import { useRouter } from "next/router";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../constants/contact";

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  pricing: {
    name: string;
    price: string;
    unit: string;
    features: string[];
  }[];
  accentColor?: string;
  whatsIncluded?: string[];
  faqItems?: {
    question: string;
    answer: string;
  }[];
  testimonials?: {
    name: string;
    role: string;
    text: string;
    rating: number;
  }[];
  galleryImages?: {
    img: string;
    title: string;
  }[];
  stats?: {
    value: string;
    label: string;
    icon: string;
  }[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  guarantees?: string[];
}

function ensureArray<T>(value: T[] | Record<string, T> | undefined | null): T[] {
  if (value == null) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "object") return Object.values(value);
  return [];
}

// Process Timeline Component with scroll animation
function ProcessTimelineComponent({ accentColor }: { accentColor: string }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const { t } = useTranslation("common");

  const steps = [
    {
      step: "1",
      title: t("homeCleaning.contactUs"),
      desc: t("homeCleaning.contactUsDesc"),
    },
    {
      step: "2",
      title: t("homeCleaning.scheduleAppointment"),
      desc: t("homeCleaning.scheduleAppointmentDesc"),
    },
    {
      step: "3",
      title: t("homeCleaning.weClean"),
      desc: t("homeCleaning.weCleanDesc"),
    },
    {
      step: "4",
      title: t("homeCleaning.enjoyCleanliness"),
      desc: t("homeCleaning.enjoyCleanlinessDesc"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleAmount = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - rect.top) / (timelineHeight + windowHeight)
          )
        );
        setLineProgress(visibleAmount * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div ref={timelineRef} className="relative">
        {/* Background line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>

        {/* Animated progress line */}
        <div
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-green-600 transition-all duration-300 ease-out"
          style={{
            height: `${lineProgress}%`,
          }}
        ></div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative pl-24 pb-8"
            >
              {/* Step circle — always visible (IntersectionObserver + opacity-0 hid content on many viewports) */}
              <div
                className="absolute left-5 top-0 w-8 h-8 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white scale-100 opacity-100 transition-all duration-500"
                style={{
                  backgroundColor: index % 2 === 0 ? accentColor : "#FFA826",
                }}
              >
                <span className="text-sm">{item.step}</span>
              </div>

              {/* Content card */}
              <Card className="p-5 sm:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                <h3 className="text-lg sm:text-xl text-gray-900 mb-2 break-words">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base break-words leading-relaxed">{item.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicePage({
  title,
  description,
  features,
  image,
  pricing,
  accentColor = "#4ca137",
  whatsIncluded,
  faqItems,
  testimonials,
  galleryImages,
  stats,
  process,
  guarantees,
}: ServicePageProps) {
  const { t } = useTranslation("common");
  const router = useRouter();
  // Default values
  const defaultWhatsIncluded = t("servicePage.defaultWhatsIncluded", {
    returnObjects: true,
  }) as string[];

  const defaultFaqItems = [
    {
      question: t("servicePage.defaultFaq.howLong.question"),
      answer: t("servicePage.defaultFaq.howLong.answer"),
    },
    {
      question: t("servicePage.defaultFaq.cleaningProducts.question"),
      answer: t("servicePage.defaultFaq.cleaningProducts.answer"),
    },
    {
      question: t("servicePage.defaultFaq.needToBePresent.question"),
      answer: t("servicePage.defaultFaq.needToBePresent.answer"),
    },
    {
      question: t("servicePage.defaultFaq.payment.question"),
      answer: t("servicePage.defaultFaq.payment.answer"),
    },
    {
      question: t("servicePage.defaultFaq.liabilityInsurance.question"),
      answer: t("servicePage.defaultFaq.liabilityInsurance.answer"),
    },
    {
      question: t("servicePage.defaultFaq.oneTimeCleaning.question"),
      answer: t("servicePage.defaultFaq.oneTimeCleaning.answer"),
    },
  ];

  const defaultTestimonials = [
    {
      name: t("servicePage.defaultTestimonials.testimonial1Name"),
      role: t("servicePage.defaultTestimonials.testimonial1Role"),
      text: t("servicePage.defaultTestimonials.testimonial1Text"),
      rating: 5,
    },
    {
      name: t("servicePage.defaultTestimonials.testimonial2Name"),
      role: t("servicePage.defaultTestimonials.testimonial2Role"),
      text: t("servicePage.defaultTestimonials.testimonial2Text"),
      rating: 5,
    },
    {
      name: t("servicePage.defaultTestimonials.testimonial3Name"),
      role: t("servicePage.defaultTestimonials.testimonial3Role"),
      text: t("servicePage.defaultTestimonials.testimonial3Text"),
      rating: 5,
    },
  ];

  const defaultGalleryImages = [
    {
      img: "https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NjIyMzMwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: t("servicePage.defaultGallery.gallery1Title"),
    },
    {
      img: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: t("servicePage.defaultGallery.gallery2Title"),
    },
    {
      img: "https://images.unsplash.com/photo-1747659362772-3caabc37c579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIyNDk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: t("servicePage.defaultGallery.gallery3Title"),
    },
  ];

  const includedItems = whatsIncluded || defaultWhatsIncluded;
  const faq = faqItems || defaultFaqItems;
  const reviews = testimonials || defaultTestimonials;
  const gallery = galleryImages || defaultGalleryImages;
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: `${accentColor}20`,
                  color: accentColor,
                }}
              >
                <span className="text-sm">{t("services.title")}</span>
              </div>
              <h1 className="text-5xl text-gray-900 mb-6">{title}</h1>
              <p className="text-xl text-gray-600 mb-8">{description}</p>

              <div className="space-y-4 mb-8">
                {ensureArray(features).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                  onClick={() => {
                    const contactSection =
                      document.getElementById("contact-section");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("common.freeQuote")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:border-[#FFA826] hover:text-[#FFA826]"
                  onClick={() => router.push("/pricing")}
                >
                  {t("common.viewCompletePricing")}
                </Button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ backgroundColor: "#FFA826" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("services.title")}
              </span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.title")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: t("about.insuranceGuarantee"),
                desc: t("about.insuranceGuaranteeDesc"),
                color: "#4ca137",
              },
              {
                icon: Award,
                title: t("about.qualityFirst"),
                desc: t("about.qualityFirstDesc"),
                color: "#5cb944",
              },
              {
                icon: Clock,
                title: t("about.reliability"),
                desc: t("about.reliabilityDesc"),
                color: "#f59e0b",
              },
              {
                icon: Zap,
                title: t("about.ecology"),
                desc: t("about.ecologyDesc"),
                color: "#FFA826",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
                >
                  <div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, ${item.color}, ${item.color})`,
                    }}
                  ></div>

                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{
                        background: `linear-gradient(to bottom right, ${item.color}, ${item.color}dd)`,
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              {t("pricing.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("pricing.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {ensureArray(pricing).map((plan, index) => (
              <Card
                key={index}
                className="p-6 border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl text-green-600 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-600">{plan.unit}</div>
                </div>

                <ul className="space-y-3">
                  {ensureArray(plan.features).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">{t("pricing.description")}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 shadow-lg border"
              style={{
                background: `linear-gradient(to right, ${accentColor}20, ${accentColor}30)`,
                borderColor: `${accentColor}40`,
              }}
            >
              <Star className="w-5 h-5" style={{ color: accentColor }} />
              <span className="text-sm" style={{ color: accentColor }}>
                {t("homeCleaning.ourWork")}
              </span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ensureArray(gallery).map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">
                {t("services.title")}
              </h2>
              <p className="text-xl text-gray-600">
                {t("services.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ensureArray(includedItems).map((item, index) => (
                <Card
                  key={index}
                  className="p-4 border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: accentColor }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - only if stats provided */}
      {stats && (
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"
            style={{ backgroundColor: "#FFA826" }}
          ></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {ensureArray(stats).map((stat, index) => {
                  // Map icons based on index
                  const IconComponent =
                    [CheckCircle, Star, Award, Sparkles][index] || CheckCircle;

                  return (
                    <Card
                      key={index}
                      className="relative p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20"
                    >
                      <div className="relative">
                        {/* Icon */}
                        <div className="mb-4 flex justify-center">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                        </div>

                        {/* Label */}
                        <div className="text-xl text-white">{stat.label}</div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section - only if process provided */}
      {process && (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl text-gray-900 mb-4">
                  {t("processSection.titlePart1")}{" "}
                  <span style={{ color: "#4ca137" }}>{t("processSection.titleHighlight")}</span>
                </h2>
                <p className="text-xl text-gray-600">
                  {t("processSection.subtitle")}
                </p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200"></div>

                <div className="grid md:grid-cols-4 gap-8 relative items-stretch">
                  {ensureArray(process).map((item, index) => (
                    <div key={index} className="relative h-full flex flex-col">
                      <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-white relative z-10 h-full flex flex-col">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4 shadow-lg flex-shrink-0"
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#4ca137" : "#FFA826",
                          }}
                        >
                          {item.step}
                        </div>
                        <h3 className="text-lg text-gray-900 mb-2 text-center">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 text-center leading-relaxed flex-1">
                          {item.description}
                        </p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Guarantees Section - only if guarantees provided */}
      {guarantees && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-gray-900 mb-4">
                  {t("guaranteesSection.titlePart1")}{" "}
                  <span style={{ color: "#FFA826" }}>{t("guaranteesSection.titleHighlight")}</span>
                </h2>
                <p className="text-xl text-gray-600">
                  {t("guaranteesSection.subtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {ensureArray(guarantees).map((guarantee, index) => (
                  <Card
                    key={index}
                    className="p-6 border-0 shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-white to-green-50"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#4ca137" }}
                      >
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-700 flex-1">{guarantee}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
                {t("faq.badge")}
              </span>
            </div>
            <h2 className="text-5xl text-gray-900 mb-6">{t("faq.title")}</h2>
            <p className="text-xl text-gray-600">{t("faq.description")}</p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {ensureArray(faq).map((item, index) => (
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
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                  <div className="pl-12 pt-2">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-green-100 to-lime-100 rounded-3xl border-2 border-green-200">
              <p className="text-gray-700 mb-4">{t("faq.haveMoreQuestions")}</p>
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <Star className="w-5 h-5 text-green-600 fill-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Recenze klientů
              </span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">
              {t("references.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("references.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ensureArray(reviews).map((testimonial, index) => (
              <Card
                key={index}
                className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: "#4ca137" }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              {t("homeCleaning.howItWorks")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("homeCleaning.simpleSteps")}
            </p>
          </div>

          <ProcessTimelineComponent accentColor={accentColor} />
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}
