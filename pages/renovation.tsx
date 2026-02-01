import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ServicePage } from "../src/components/ServicePage";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { useServiceData } from "../src/utils/serviceData";

export default function RenovationPage() {
  const { t } = useTranslation("common");
  const servicesData = useServiceData();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicePage
          title={servicesData.renovation.title}
          description={servicesData.renovation.description}
          features={servicesData.renovation.features}
          image={servicesData.renovation.image}
          pricing={servicesData.renovation.pricing}
          stats={[
            {
              value: "1000+",
              label: t("serviceData.renovation.stats.projects"),
              icon: "🏗️",
            },
            {
              value: "100%",
              label: t("serviceData.renovation.stats.deadlineCompliance"),
              icon: "✅",
            },
            {
              value: "50+",
              label: t("serviceData.renovation.stats.teams"),
              icon: "👷",
            },
            {
              value: "A+",
              label: t("serviceData.renovation.stats.references"),
              icon: "🏆",
            },
          ]}
          guarantees={
            t("serviceData.renovation.guarantees", {
              returnObjects: true,
            }) as string[]
          }
          whatsIncluded={
            t("serviceData.renovation.whatsIncluded", {
              returnObjects: true,
            }) as string[]
          }
          faqItems={[
            {
              question: t("serviceData.renovation.faq.bestTime.question"),
              answer: t("serviceData.renovation.faq.bestTime.answer"),
            },
            {
              question: t(
                "serviceData.renovation.faq.constructionMaterials.question"
              ),
              answer: t(
                "serviceData.renovation.faq.constructionMaterials.answer"
              ),
            },
            {
              question: t(
                "serviceData.renovation.faq.cleaningDuration.question"
              ),
              answer: t("serviceData.renovation.faq.cleaningDuration.answer"),
            },
            {
              question: t("serviceData.renovation.faq.exteriors.question"),
              answer: t("serviceData.renovation.faq.exteriors.answer"),
            },
            {
              question: t(
                "serviceData.renovation.faq.luxuryMaterials.question"
              ),
              answer: t("serviceData.renovation.faq.luxuryMaterials.answer"),
            },
            {
              question: t(
                "serviceData.renovation.faq.windowWashingOnly.question"
              ),
              answer: t("serviceData.renovation.faq.windowWashingOnly.answer"),
            },
          ]}
          testimonials={[
            {
              name: t("serviceData.renovation.testimonials.testimonial1Name"),
              role: t("serviceData.renovation.testimonials.testimonial1Role"),
              text: t("serviceData.renovation.testimonials.testimonial1Text"),
              rating: 5,
            },
            {
              name: t("serviceData.renovation.testimonials.testimonial2Name"),
              role: t("serviceData.renovation.testimonials.testimonial2Role"),
              text: t("serviceData.renovation.testimonials.testimonial2Text"),
              rating: 5,
            },
            {
              name: t("serviceData.renovation.testimonials.testimonial3Name"),
              role: t("serviceData.renovation.testimonials.testimonial3Role"),
              text: t("serviceData.renovation.testimonials.testimonial3Text"),
              rating: 5,
            },
          ]}
          galleryImages={[
            {
              img: "https://images.unsplash.com/photo-1738348157125-339841af31fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjByZW5vdmF0aW9uJTIwZHVzdHxlbnwxfHx8fDE3NjIyNTA2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.renovation.gallery.afterRenovation"),
            },
            {
              img: "https://images.unsplash.com/photo-1661746785480-439c1a4b8254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjExNDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.renovation.gallery.constructionCleaning"),
            },
            {
              img: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.renovation.gallery.finalResult"),
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
