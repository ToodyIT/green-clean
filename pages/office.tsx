import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ServicePage } from "../src/components/ServicePage";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { SEO } from "../src/components/SEO";
import { useServiceData } from "../src/utils/serviceData";

export default function OfficePage() {
  const { t } = useTranslation("common");
  const servicesData = useServiceData();

  return (
    <div className="min-h-screen">
      <SEO title={servicesData.office.title} description={servicesData.office.description} />
      <Header />
      <main>
        <ServicePage
          title={servicesData.office.title}
          description={servicesData.office.description}
          features={servicesData.office.features}
          image={servicesData.office.image}
          pricing={servicesData.office.pricing}
          stats={[
            { value: "500+", label: t("serviceData.office.stats.satisfiedCompanies"), icon: "🏢" },
            { value: t("serviceData.office.stats.yearsValue"), label: t("serviceData.office.stats.yearsOnMarket"), icon: "⭐" },
            { value: "98%", label: t("serviceData.office.stats.satisfaction"), icon: "😊" },
            { value: "24/7", label: t("serviceData.office.stats.support"), icon: "📞" },
          ]}
          process={[
            {
              step: 1,
              title: t("homeCleaning.contactUs"),
              description: t("homeCleaning.contactUsDesc"),
            },
            {
              step: 2,
              title: t("homeCleaning.scheduleAppointment"),
              description: t("homeCleaning.scheduleAppointmentDesc"),
            },
            {
              step: 3,
              title: t("homeCleaning.weClean"),
              description: t("homeCleaning.weCleanDesc"),
            },
            {
              step: 4,
              title: t("homeCleaning.enjoyCleanliness"),
              description: t("homeCleaning.enjoyCleanlinessDesc"),
            },
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
              name: t("serviceData.office.testimonials.testimonial1Name"),
              role: t("serviceData.office.testimonials.testimonial1Role"),
              text: t("serviceData.office.testimonials.testimonial1Text"),
              rating: 5,
            },
            {
              name: t("serviceData.office.testimonials.testimonial2Name"),
              role: t("serviceData.office.testimonials.testimonial2Role"),
              text: t("serviceData.office.testimonials.testimonial2Text"),
              rating: 5,
            },
            {
              name: t("serviceData.office.testimonials.testimonial3Name"),
              role: t("serviceData.office.testimonials.testimonial3Role"),
              text: t("serviceData.office.testimonials.testimonial3Text"),
              rating: 5,
            },
          ]}
          galleryImages={[
            {
              img: "https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NjIyMzMwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.office.gallery.modernOffices"),
            },
            {
              img: "https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHRlYW0lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMjEyMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.office.gallery.professionalTeam"),
            },
            {
              img: "https://images.unsplash.com/photo-1747659362772-3caabc37c579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIyNDk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.office.gallery.modernTechnology"),
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
