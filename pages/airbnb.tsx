import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ServicePage } from "../src/components/ServicePage";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { FloatingActionButton } from "../src/components/FloatingActionButton";
import { CookieConsent } from "../src/components/CookieConsent";
import { useServiceData } from "../src/utils/serviceData";

export default function AirbnbPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const servicesData = useServiceData();

  const handleNavigate = (page: string) => {
    const path = page === "homepage" ? "/" : `/${page}`;
    router.push(path);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicePage
          title={servicesData.airbnb.title}
          description={servicesData.airbnb.description}
          features={servicesData.airbnb.features}
          image={servicesData.airbnb.image}
          pricing={servicesData.airbnb.pricing}
          process={[
            {
              step: 1,
              title: t("serviceData.airbnb.process.step1Title"),
              description: t("serviceData.airbnb.process.step1Desc"),
            },
            {
              step: 2,
              title: t("serviceData.airbnb.process.step2Title"),
              description: t("serviceData.airbnb.process.step2Desc"),
            },
            {
              step: 3,
              title: t("serviceData.airbnb.process.step3Title"),
              description: t("serviceData.airbnb.process.step3Desc"),
            },
            {
              step: 4,
              title: t("serviceData.airbnb.process.step4Title"),
              description: t("serviceData.airbnb.process.step4Desc"),
            },
          ]}
          guarantees={
            t("serviceData.airbnb.guarantees", {
              returnObjects: true,
            }) as string[]
          }
          whatsIncluded={
            t("serviceData.airbnb.whatsIncluded", {
              returnObjects: true,
            }) as string[]
          }
          faqItems={[
            {
              question: t("serviceData.airbnb.faq.cleaningSpeed.question"),
              answer: t("serviceData.airbnb.faq.cleaningSpeed.answer"),
            },
            {
              question: t("serviceData.airbnb.faq.provideLinens.question"),
              answer: t("serviceData.airbnb.faq.provideLinens.answer"),
            },
            {
              question: t("serviceData.airbnb.faq.excessiveDamage.question"),
              answer: t("serviceData.airbnb.faq.excessiveDamage.answer"),
            },
            {
              question: t("serviceData.airbnb.faq.eveningWeekend.question"),
              answer: t("serviceData.airbnb.faq.eveningWeekend.answer"),
            },
            {
              question: t("serviceData.airbnb.faq.reportIssues.question"),
              answer: t("serviceData.airbnb.faq.reportIssues.answer"),
            },
            {
              question: t("serviceData.airbnb.faq.communication.question"),
              answer: t("serviceData.airbnb.faq.communication.answer"),
            },
          ]}
          testimonials={[
            {
              name: t("serviceData.airbnb.testimonials.testimonial1Name"),
              role: t("serviceData.airbnb.testimonials.testimonial1Role"),
              text: t("serviceData.airbnb.testimonials.testimonial1Text"),
              rating: 5,
            },
            {
              name: t("serviceData.airbnb.testimonials.testimonial2Name"),
              role: t("serviceData.airbnb.testimonials.testimonial2Role"),
              text: t("serviceData.airbnb.testimonials.testimonial2Text"),
              rating: 5,
            },
            {
              name: t("serviceData.airbnb.testimonials.testimonial3Name"),
              role: t("serviceData.airbnb.testimonials.testimonial3Role"),
              text: t("serviceData.airbnb.testimonials.testimonial3Text"),
              rating: 5,
            },
          ]}
          galleryImages={[
            {
              img: "https://images.unsplash.com/photo-1589803010842-41cdf85bf0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGFwYXJ0bWVudCUyMGFpcmJuYnxlbnwxfHx8fDE3NjIyNTA2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.airbnb.gallery.cleanAirbnb"),
            },
            {
              img: "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.airbnb.gallery.modernSpaces"),
            },
            {
              img: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.airbnb.gallery.readyForGuests"),
            },
          ]}
          onNavigate={handleNavigate}
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
