import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useHomeSectionsTranslation } from "../i18n/useAppTranslation";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_FORM_PATH,
} from "../constants/contact";
import { navigateToContactForm } from "../utils/navigateToContactForm";
import { Card } from "./ui/card";
import {
  Award,
  Users,
  Shield,
  Clock,
  Target,
  Heart,
  Sparkles,
  Zap,
  CheckCircle,
  Calendar,
  Leaf,
  Droplets,
  Wind,
  Briefcase,
  Building2,
  Home,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionBackground } from "./SectionBackground";
import { useThrottledScroll } from "../hooks/useThrottledScroll";

// Timeline Section Component with scroll animations
function TimelineSection() {
  const { t } = useHomeSectionsTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleDots, setVisibleDots] = useState<Set<number>>(new Set());

  const milestones = [
    {
      year: "2010",
      title: t("about.companyFoundation"),
      description: t("about.companyFoundationDesc"),
      position: "left",
    },
    {
      year: "2013",
      title: t("about.teamExpansion"),
      description: t("about.teamExpansionDesc"),
      position: "right",
    },
    {
      year: "2016",
      title: t("about.ecoInitiative"),
      description: t("about.ecoInitiativeDesc"),
      position: "left",
    },
    {
      year: "2019",
      title: t("about.newTechnologies"),
      description: t("about.newTechnologiesDesc"),
      position: "right",
    },
    {
      year: "2022",
      title: t("about.qualityAward"),
      description: t("about.qualityAwardDesc"),
      position: "left",
    },
    {
      year: "2025",
      title: t("about.today"),
      description: t("about.todayDesc"),
      position: "right",
    },
  ];

  useThrottledScroll(() => {
    if (!timelineRef.current) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const timelineHeight = rect.height;
    const scrollStart = rect.top;

    if (scrollStart < windowHeight && rect.bottom > 0) {
      const visibleAmount = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - scrollStart) / (timelineHeight + windowHeight)
        )
      );
      setLineProgress(visibleAmount * 100);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleDots((prev) => {
              const updated = new Set(prev);
              updated.add(index);
              return updated;
            });
          }
        });
      },
      { threshold: 0.5, rootMargin: "-50px" }
    );

    const milestoneElements =
      timelineRef.current?.querySelectorAll("[data-milestone]");
    milestoneElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl text-gray-900 mb-4">{t("about.ourJourney")}</h3>
        <p className="text-lg text-gray-600">{t("about.keyMilestones")}</p>
      </div>

      <div ref={timelineRef} className="relative max-w-4xl mx-auto">
        {/* Background timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden lg:block"></div>

        {/* Animated progress line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-green-600 hidden lg:block transition-all duration-300 ease-out"
          style={{
            height: `${lineProgress}%`,
            top: 0,
          }}
        ></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              data-milestone
              data-index={index}
              className={`relative flex items-center ${
                milestone.position === "left"
                  ? "lg:justify-start"
                  : "lg:justify-end"
              }`}
            >
              {/* Timeline dot with animation */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 border-4 border-white shadow-lg z-10 hidden lg:block transition-all duration-500 ${
                  visibleDots.has(index)
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              />

              {/* Content card */}
              <Card
                className={`relative w-full lg:w-5/12 p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group bg-white ${
                  milestone.position === "left" ? "lg:mr-auto" : "lg:ml-auto"
                }`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <div className="text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                  </div>
                  <h4 className="text-xl text-gray-900 mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function About() {
  const { t } = useHomeSectionsTranslation();
  const router = useRouter();

  const values = [
    {
      icon: Award,
      title: t("about.qualityFirst"),
      description: t("about.qualityFirstDesc"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: t("about.experiencedTeam"),
      description: t("about.experiencedTeamDesc"),
      gradient: "from-lime-500 to-green-500",
    },
    {
      icon: Shield,
      title: t("about.insuranceGuarantee"),
      description: t("about.insuranceGuaranteeDesc"),
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Clock,
      title: t("about.reliability"),
      description: t("about.reliabilityDesc"),
      customColor: "#FFA826",
    },
    {
      icon: Target,
      title: t("about.individualApproach"),
      description: t("about.individualApproachDesc"),
      customColor: "#FFB84D",
    },
    {
      icon: Heart,
      title: t("about.ecology"),
      description: t("about.ecologyDesc"),
      customColor: "#E59518",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: t("about.satisfiedClients"),
      gradient: "from-green-500 to-emerald-600",
    },
    {
      value: "3+",
      label: t("about.yearsInBusiness"),
      customColor: "#FFA826",
    },
    {
      value: "10+",
      label: t("about.teamMembers"),
      gradient: "from-lime-500 to-green-600",
    },
    {
      value: "94%",
      label: t("about.clientSatisfaction"),
      customColor: "#FFB84D",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <SectionBackground variant="light" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-100 to-lime-100 rounded-full mb-4 sm:mb-6 shadow-lg border border-green-200">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            <span className="text-xs sm:text-sm bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
              {t("about.title")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
            {t("about.subtitle")}
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
              <p>{t("about.description3")}</p>
              <p>{t("about.description4")}</p>
            </div>
          </div>

          {/* Image with 3D effect */}
          <div className="relative">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0NDYwN3ww&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral"
                  alt="Our cleaning team"
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white px-4 py-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:px-5 sm:py-8"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                  stat.gradient ? `bg-gradient-to-br ${stat.gradient}` : ""
                }`}
                style={
                  stat.customColor
                    ? { backgroundColor: stat.customColor }
                    : {}
                }
              ></div>

              <div className="relative">
                <div
                  className={`about-stat-value mb-3 bg-clip-text text-transparent ${
                    stat.gradient ? `bg-gradient-to-r ${stat.gradient}` : ""
                  }`}
                  style={
                    stat.customColor
                      ? {
                          backgroundImage: `linear-gradient(to right, ${stat.customColor}, ${stat.customColor}dd)`,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                        }
                      : undefined
                  }
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 sm:text-base">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl text-gray-900 mb-4">
              {t("about.whatDefinesUs")}
            </h3>
            <p className="text-lg text-gray-600">{t("about.ourValues")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="relative p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                      value.gradient
                        ? `bg-gradient-to-br ${value.gradient}`
                        : ""
                    }`}
                    style={
                      value.customColor
                        ? { backgroundColor: value.customColor }
                        : {}
                    }
                  ></div>

                  {/* Content */}
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${
                        value.gradient
                          ? `bg-gradient-to-br ${value.gradient}`
                          : ""
                      }`}
                      style={
                        value.customColor
                          ? {
                              background: `linear-gradient(to bottom right, ${value.customColor}, ${value.customColor}dd)`,
                            }
                          : {}
                      }
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity ${
                      value.gradient
                        ? `bg-gradient-to-br ${value.gradient}`
                        : ""
                    }`}
                    style={
                      value.customColor
                        ? {
                            background: `linear-gradient(to bottom right, ${value.customColor}, ${value.customColor}88)`,
                          }
                        : {}
                    }
                  ></div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline - Our Journey */}
        <TimelineSection />

        {/* Our Team Structure - hidden */}
        <div className="mb-20 hidden">
          <div className="text-center mb-16">
            <h3 className="text-4xl text-gray-900 mb-4">
              {t("about.ourTeam")}
            </h3>
            <p className="text-lg text-gray-600">{t("about.professionals")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Commercial Cleaning",
                role: "25 specialists",
                description:
                  "Professional cleaning of offices, stores and industrial spaces",
                icon: Briefcase,
                gradient: "from-green-500 to-emerald-600",
              },
              {
                name: "Residential Services",
                role: "15 experts",
                description: "Care for households, apartments and family homes",
                icon: Home,
                customColor: "#FFA826",
              },
              {
                name: "Special Cleaning",
                role: "10 experts",
                description:
                  "High-rise work, emergency cleaning and disinfection",
                icon: Building2,
                gradient: "from-lime-500 to-green-600",
              },
              {
                name: "Customer Support",
                role: "5 consultants",
                description: "Coordination, planning and customer care",
                icon: Users,
                customColor: "#FFB84D",
              },
            ].map((team, index) => {
              const Icon = team.icon;
              return (
                <Card
                  key={index}
                  className="relative p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white"
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                      team.gradient ? `bg-gradient-to-br ${team.gradient}` : ""
                    }`}
                    style={
                      team.customColor
                        ? { backgroundColor: team.customColor }
                        : {}
                    }
                  ></div>

                  <div className="relative text-center">
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${
                          team.gradient
                            ? `bg-gradient-to-br ${team.gradient}`
                            : ""
                        }`}
                        style={
                          team.customColor
                            ? {
                                background: `linear-gradient(to bottom right, ${team.customColor}, ${team.customColor}dd)`,
                              }
                            : {}
                        }
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-2">{team.name}</h4>
                    <div
                      className={`text-sm mb-3 ${
                        team.gradient
                          ? `bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`
                          : ""
                      }`}
                      style={
                        team.customColor ? { color: team.customColor } : {}
                      }
                    >
                      {team.role}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technology & Equipment */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl text-gray-900 mb-4">
              {t("about.ourTechnology")}
            </h3>
            <p className="text-lg text-gray-600">
              {t("about.modernEquipment")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                titleKey: "about.techEcoTitle",
                descKey: "about.techEcoDesc",
                featureKeys: ["about.techEco1", "about.techEco2", "about.techEco3"],
                icon: Leaf,
              },
              {
                titleKey: "about.techHepaTitle",
                descKey: "about.techHepaDesc",
                featureKeys: ["about.techHepa1", "about.techHepa2", "about.techHepa3"],
                icon: Wind,
              },
              {
                titleKey: "about.techSteamTitle",
                descKey: "about.techSteamDesc",
                featureKeys: ["about.techSteam1", "about.techSteam2", "about.techSteam3"],
                icon: Droplets,
              },
              {
                titleKey: "about.techMicrofiberTitle",
                descKey: "about.techMicrofiberDesc",
                featureKeys: ["about.techMicrofiber1", "about.techMicrofiber2", "about.techMicrofiber3"],
                icon: Sparkles,
              },
              {
                titleKey: "about.techUvTitle",
                descKey: "about.techUvDesc",
                featureKeys: ["about.techUv1", "about.techUv2", "about.techUv3"],
                icon: Zap,
              },
              {
                titleKey: "about.techEquipmentTitle",
                descKey: "about.techEquipmentDesc",
                featureKeys: ["about.techEquipment1", "about.techEquipment2", "about.techEquipment3"],
                icon: Target,
              },
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card
                  key={index}
                  className="relative p-6 border-0 shadow-xl bg-white overflow-hidden"
                >
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg text-gray-900 mb-2">
                          {t(tech.titleKey)}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {t(tech.descKey)}
                    </p>

                    <div className="space-y-2">
                      {tech.featureKeys.map((key, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{t(key)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us CTA */}
        <div className="relative">
          <Card className="relative p-12 border-0 shadow-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(255, 168, 38, 0.2)" }}
            ></div>

            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-sm text-white">
                  {t("about.weAreHere")}
                </span>
              </div>

              <h3 className="text-4xl text-white mb-6">
                {t("about.readyToStart")}
              </h3>
              <p className="text-xl text-green-50 mb-8 leading-relaxed">
                {t("about.contactToday")}
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={CONTACT_FORM_PATH}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToContactForm(router);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-white text-green-600 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>{t("about.getPriceQuote")}</span>
                  <CheckCircle className="w-4 h-4" />
                </a>
                <a
                  href={CONTACT_PHONE_TEL}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-md hover:bg-white/20 transition-all duration-300"
                >
                  <span>{CONTACT_PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
