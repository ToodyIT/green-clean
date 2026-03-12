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

export default function FurniturePage() {
  const { t } = useTranslation("common");
  const servicesData = useServiceData();

  return (
    <div className="min-h-screen">
      <SEO title={servicesData.furniture.title} description={servicesData.furniture.description} />
      <Header />
      <main>
        <ServicePage
          title={servicesData.furniture.title}
          description={servicesData.furniture.description}
          features={servicesData.furniture.features}
          image={servicesData.furniture.image}
          pricing={servicesData.furniture.pricing}
          stats={[
            { value: "15 000+", label: t("serviceData.furniture.stats.cleanedItems"), icon: "🛋️" },
            { value: "100%", label: t("serviceData.furniture.stats.ecoFriendly"), icon: "🌿" },
            { value: "2-4h", label: t("serviceData.furniture.stats.dryingTime"), icon: "⏱️" },
            { value: "5★", label: t("serviceData.furniture.stats.rating"), icon: "⭐" },
          ]}
          process={
            t("serviceData.furniture.process", {
              returnObjects: true,
            }) as Array<{
              step: number;
              title: string;
              description: string;
            }>
          }
          whatsIncluded={
            t("serviceData.furniture.whatsIncluded", {
              returnObjects: true,
            }) as string[]
          }
          faqItems={[
            {
              question: t("serviceData.furniture.faq.dryingTime.question"),
              answer: t("serviceData.furniture.faq.dryingTime.answer"),
            },
            {
              question: t("serviceData.furniture.faq.oldStains.question"),
              answer: t("serviceData.furniture.faq.oldStains.answer"),
            },
            {
              question: t("serviceData.furniture.faq.safeForChildren.question"),
              answer: t("serviceData.furniture.faq.safeForChildren.answer"),
            },
            {
              question: t("serviceData.furniture.faq.leatherFurniture.question"),
              answer: t("serviceData.furniture.faq.leatherFurniture.answer"),
            },
            {
              question: t("serviceData.furniture.faq.protectionTreatment.question"),
              answer: t("serviceData.furniture.faq.protectionTreatment.answer"),
            },
            {
              question: t("serviceData.furniture.faq.preparation.question"),
              answer: t("serviceData.furniture.faq.preparation.answer"),
            },
          ]}
          testimonials={[
            {
              name: t("serviceData.furniture.testimonials.testimonial1Name"),
              role: t("serviceData.furniture.testimonials.testimonial1Role"),
              text: t("serviceData.furniture.testimonials.testimonial1Text"),
              rating: 5,
            },
            {
              name: t("serviceData.furniture.testimonials.testimonial2Name"),
              role: t("serviceData.furniture.testimonials.testimonial2Role"),
              text: t("serviceData.furniture.testimonials.testimonial2Text"),
              rating: 5,
            },
            {
              name: t("serviceData.furniture.testimonials.testimonial3Name"),
              role: t("serviceData.furniture.testimonials.testimonial3Role"),
              text: t("serviceData.furniture.testimonials.testimonial3Text"),
              rating: 5,
            },
          ]}
          galleryImages={[
            {
              img: "https://images.unsplash.com/photo-1658501238841-da09649a94f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMGNvdWNofGVufDF8fHx8MTc2MjI1MDY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.furniture.gallery.sofaCleaning"),
            },
            {
              img: "https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMHNvZmF8ZW58MXx8fHwxNzYxMTQ0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.furniture.gallery.professionalCare"),
            },
            {
              img: "https://images.unsplash.com/photo-1747659362772-3caabc37c579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIyNDk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: t("serviceData.furniture.gallery.modernTechnology"),
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
