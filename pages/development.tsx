import { GetStaticProps } from "next";
import { useServiceDetailTranslation } from "../src/i18n/useAppTranslation";
import { loadTranslations } from "../src/i18n/loadTranslations";
import { ServicePage } from "../src/components/ServicePage";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { SEO } from "../src/components/SEO";
import { useServiceData } from "../src/utils/serviceData";

export default function DevelopmentPage() {
  const { t } = useServiceDetailTranslation();
  const servicesData = useServiceData();

  return (
    <div className="min-h-screen">
      <SEO title={servicesData.development.title} description={servicesData.development.description} />
      <Header />
      <main>
        <ServicePage
          title={servicesData.development.title}
          description={servicesData.development.description}
          features={servicesData.development.features}
          image={servicesData.development.image}
          pricing={servicesData.development.pricing}
          process={[
            {
              step: 1,
              title: t("serviceData.development.process.step1Title"),
              description: t("serviceData.development.process.step1Desc"),
            },
            {
              step: 2,
              title: t("serviceData.development.process.step2Title"),
              description: t("serviceData.development.process.step2Desc"),
            },
            {
              step: 3,
              title: t("serviceData.development.process.step3Title"),
              description: t("serviceData.development.process.step3Desc"),
            },
            {
              step: 4,
              title: t("serviceData.development.process.step4Title"),
              description: t("serviceData.development.process.step4Desc"),
            },
          ]}
          stats={[
            { value: "50+", label: t("serviceData.development.stats.developmentProjects"), icon: "🏗️" },
            { value: "5000+", label: t("serviceData.development.stats.cleanedApartments"), icon: "🏠" },
            { value: "100%", label: t("serviceData.development.stats.deadlineCompliance"), icon: "⏰" },
            { value: "3+", label: t("serviceData.development.stats.yearsExperience"), icon: "📅" },
          ]}
          guarantees={
            t("serviceData.development.guarantees", {
              returnObjects: true,
            }) as string[]
          }
          whatsIncluded={
            t("serviceData.development.whatsIncluded", {
              returnObjects: true,
            }) as string[]
          }
          faqItems={[
            {
              question: t("serviceData.development.faq.largeProjects.question"),
              answer: t("serviceData.development.faq.largeProjects.answer"),
            },
            {
              question: t("serviceData.development.faq.coordination.question"),
              answer: t("serviceData.development.faq.coordination.answer"),
            },
            {
              question: t("serviceData.development.faq.reporting.question"),
              answer: t("serviceData.development.faq.reporting.answer"),
            },
            {
              question: t("serviceData.development.faq.strictDeadlines.question"),
              answer: t("serviceData.development.faq.strictDeadlines.answer"),
            },
            {
              question: t("serviceData.development.faq.customPricing.question"),
              answer: t("serviceData.development.faq.customPricing.answer"),
            },
            {
              question: t("serviceData.development.faq.insurance.question"),
              answer: t("serviceData.development.faq.insurance.answer"),
            },
          ]}
          testimonials={[
            {
              name: t("serviceData.development.testimonials.testimonial1Name"),
              role: t("serviceData.development.testimonials.testimonial1Role"),
              text: t("serviceData.development.testimonials.testimonial1Text"),
              rating: 5,
            },
            {
              name: t("serviceData.development.testimonials.testimonial2Name"),
              role: t("serviceData.development.testimonials.testimonial2Role"),
              text: t("serviceData.development.testimonials.testimonial2Text"),
              rating: 5,
            },
            {
              name: t("serviceData.development.testimonials.testimonial3Name"),
              role: t("serviceData.development.testimonials.testimonial3Role"),
              text: t("serviceData.development.testimonials.testimonial3Text"),
              rating: 5,
            },
          ]}
          galleryImages={[
            {
              img: "https://images.unsplash.com/photo-1759931373726-298a1df1960c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wbWVudCUyMHByb2plY3QlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjIyNTA2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.development.gallery.developmentProjects"),
            },
            {
              img: "https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.development.gallery.largeProjects"),
            },
            {
              img: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.development.gallery.beforeHandover"),
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
      ...(await loadTranslations(locale)),
    },
  };
};
