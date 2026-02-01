import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ServicePage } from "../src/components/ServicePage";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { useServiceData } from "../src/utils/serviceData";

export default function OfficePage() {
  const { t } = useTranslation("common");
  const servicesData = useServiceData();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicePage
          title={servicesData.office.title}
          description={servicesData.office.description}
          features={servicesData.office.features}
          image={servicesData.office.image}
          pricing={servicesData.office.pricing}
          stats={[
            { value: "500+", label: "Spokojených firem", icon: "🏢" },
            { value: "10 let", label: "Na trhu", icon: "⭐" },
            { value: "98%", label: "Spokojenost", icon: "😊" },
            { value: "24/7", label: "Podpora", icon: "📞" },
          ]}
          whatsIncluded={
            t("serviceData.office.whatsIncluded", {
              returnObjects: true,
            }) as string[]
          }
          faqItems={[
            {
              question: t("serviceData.office.faq.cleanOutsideHours.question"),
              answer: t("serviceData.office.faq.cleanOutsideHours.answer"),
            },
            {
              question: t(
                "serviceData.office.faq.recommendedFrequency.question"
              ),
              answer: t("serviceData.office.faq.recommendedFrequency.answer"),
            },
            {
              question: t("serviceData.office.faq.ownSupplies.question"),
              answer: t("serviceData.office.faq.ownSupplies.answer"),
            },
            {
              question: t("serviceData.office.faq.companyReferences.question"),
              answer: t("serviceData.office.faq.companyReferences.answer"),
            },
            {
              question: t("serviceData.office.faq.notSatisfied.question"),
              answer: t("serviceData.office.faq.notSatisfied.answer"),
            },
            {
              question: t("serviceData.office.faq.longTermContracts.question"),
              answer: t("serviceData.office.faq.longTermContracts.answer"),
            },
          ]}
          testimonials={[
            {
              name: "Tomáš Dvořák",
              role: "CEO IT společnosti",
              text: "Spolupracujeme již 3 roky. Týmy jsou vždy profesionální, diskrétní a dodržují všechny naše bezpečnostní požadavky.",
              rating: 5,
            },
            {
              name: "Lucie Marková",
              role: "Office Manager",
              text: "Konečně úklidová firma, na kterou je spolehnutí. Flexibilní, komunikativní a hlavně spolehliví. Doporučuji!",
              rating: 5,
            },
            {
              name: "Pavel Černý",
              role: "Facility Manager",
              text: "Perfektní kvalita za rozumnou cenu. Oceňuji zejména jejich proaktivní přístup a pravidelný reporting.",
              rating: 5,
            },
          ]}
          galleryImages={[
            {
              img: "https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NjIyMzMwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "Moderní kanceláře",
            },
            {
              img: "https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHRlYW0lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMjEyMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "Profesionální tým",
            },
            {
              img: "https://images.unsplash.com/photo-1747659362772-3caabc37c579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIyNDk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "Moderní technologie",
            },
          ]}
        />
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
