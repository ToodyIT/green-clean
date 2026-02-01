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

export default function FurniturePage() {
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
          title={servicesData.furniture.title}
          description={servicesData.furniture.description}
          features={servicesData.furniture.features}
          image={servicesData.furniture.image}
          pricing={servicesData.furniture.pricing}
          stats={[
            { value: "15 000+", label: "Vyčištěných kusů", icon: "🛋️" },
            { value: "100%", label: "Ekologické", icon: "🌿" },
            { value: "2-4h", label: "Schnutí", icon: "⏱️" },
            { value: "5★", label: "Hodnocení", icon: "⭐" },
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
              question: "Jak dlouho trvá schnutí?",
              answer:
                "Díky moderní technologii je nábytek vlhký jen lehce a je možné jej používat již za 2-4 hodiny. Kompletní vyschnutí trvá 6-12 hodin dle materiálu.",
            },
            {
              question: "Dokážete odstranit staré skvrny?",
              answer:
                "Většinu skvrn ano. Máme speciální prostředky na víno, kávu, krev, tuky atd. U velmi starých skvrn nemůžeme garantovat 100% odstranění, ale vždy se snažíme o maximální výsledek.",
            },
            {
              question: "Je čištění bezpečné pro děti a domácí mazlíčky?",
              answer:
                "Ano, používáme ekologické, certifikované prostředky, které jsou bezpečné pro celou rodinu včetně dětí a zvířat.",
            },
            {
              question: "Čistíte i kožený nábytek?",
              answer:
                "Ano, máme speciální procedury a prostředky pro kůži a koženku. Čištění včetně následného ošetření a výživy kůže.",
            },
            {
              question: "Co impregnace a k čemu slouží?",
              answer:
                "Impregnace vytváří neviditelnou ochrannou vrstvu, která odpuzuje tekutiny a nečistoty. Prodlužuje životnost nábytku a usnadňuje běžnou údržbu.",
            },
            {
              question: "Musím nábytek nějak připravit?",
              answer:
                "Ideálně odstraňte volné předměty (polštáře, deky atd.). My se již postaráme o kompletní přípravu a následný úklid.",
            },
          ]}
          testimonials={[
            {
              name: "Markéta Horáková",
              role: "Majitelka domu",
              text: "Sedačka vypadá jako nová! Nevěřila jsem, že se skvrny po dětech podaří odstranit. Fantastická práce!",
              rating: 5,
            },
            {
              name: "David Novotný",
              role: "Restauratér",
              text: "Čistíme u nich veškerý nábytek v restauraci. Profesionální přístup, rychlé schnutí, žádné prostoje.",
              rating: 5,
            },
            {
              name: "Ivana Králová",
              role: "Designérka interiérů",
              text: "Doporučuji všem svým klientům. Vždy špičková kvalita a šetrný přístup k luxusním materiálům.",
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
