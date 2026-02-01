import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ServicePage } from "../src/components/ServicePage";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { useServiceData } from "../src/utils/serviceData";

export default function BuildingsPage() {
  const { t } = useTranslation("common");
  const servicesData = useServiceData();
 

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicePage
          title={servicesData.buildings.title}
          description={servicesData.buildings.description}
          features={servicesData.buildings.features}
          image={servicesData.buildings.image}
          pricing={servicesData.buildings.pricing}
          process={[
            {
              step: 1,
              title: t("serviceData.buildings.process.step1Title"),
              description: t("serviceData.buildings.process.step1Desc"),
            },
            {
              step: 2,
              title: t("serviceData.buildings.process.step2Title"),
              description: t("serviceData.buildings.process.step2Desc"),
            },
            {
              step: 3,
              title: t("serviceData.buildings.process.step3Title"),
              description: t("serviceData.buildings.process.step3Desc"),
            },
            {
              step: 4,
              title: t("serviceData.buildings.process.step4Title"),
              description: t("serviceData.buildings.process.step4Desc"),
            },
          ]}
          stats={[
            {
              value: "150+",
              label: t("serviceData.buildings.stats.managedBuildings"),
              icon: "🏘️",
            },
            {
              value: "5000+",
              label: t("serviceData.buildings.stats.satisfiedResidents"),
              icon: "👨‍👩‍👧‍👦",
            },
            {
              value: "99%",
              label: t("serviceData.buildings.stats.hoaSatisfaction"),
              icon: "😊",
            },
            {
              value: "8 let",
              label: t("serviceData.buildings.stats.averageCooperation"),
              icon: "🤝",
            },
          ]}
          whatsIncluded={
            t("serviceData.buildings.whatsIncluded", {
              returnObjects: true,
            }) as string[]
          }
          faqItems={[
            {
              question: t(
                "serviceData.buildings.faq.recommendedFrequency.question"
              ),
              answer: t(
                "serviceData.buildings.faq.recommendedFrequency.answer"
              ),
            },
            {
              question: t("serviceData.buildings.faq.whatsIncluded.question"),
              answer: t("serviceData.buildings.faq.whatsIncluded.answer"),
            },
            {
              question: t("serviceData.buildings.faq.reporting.question"),
              answer: t("serviceData.buildings.faq.reporting.answer"),
            },
            {
              question: t("serviceData.buildings.faq.companyChange.question"),
              answer: t("serviceData.buildings.faq.companyChange.answer"),
            },
            {
              question: t("serviceData.buildings.faq.weekendCleaning.question"),
              answer: t("serviceData.buildings.faq.weekendCleaning.answer"),
            },
            {
              question: t("serviceData.buildings.faq.complaints.question"),
              answer: t("serviceData.buildings.faq.complaints.answer"),
            },
          ]}
          testimonials={[
            {
              name: t("serviceData.buildings.testimonials.testimonial1Name"),
              role: t("serviceData.buildings.testimonials.testimonial1Role"),
              text: t("serviceData.buildings.testimonials.testimonial1Text"),
              rating: 5,
            },
            {
              name: t("serviceData.buildings.testimonials.testimonial2Name"),
              role: t("serviceData.buildings.testimonials.testimonial2Role"),
              text: t("serviceData.buildings.testimonials.testimonial2Text"),
              rating: 5,
            },
            {
              name: t("serviceData.buildings.testimonials.testimonial3Name"),
              role: t("serviceData.buildings.testimonials.testimonial3Role"),
              text: t("serviceData.buildings.testimonials.testimonial3Text"),
              rating: 5,
            },
          ]}
          galleryImages={[
            {
              img: "https://images.unsplash.com/photo-1630699293333-88b76da1405d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGhhbGx3YXl8ZW58MXx8fHwxNzYyMjUwNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.buildings.gallery.commonAreas"),
            },
            {
              img: "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.buildings.gallery.panelBuildings"),
            },
            {
              img: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.buildings.gallery.cleanEnvironment"),
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
