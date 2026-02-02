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

export default function DevelopmentPage() {
  const { t } = useTranslation("common");
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
              title: "Úvodní jednání",
              description: "Prodiskutujeme rozsah a harmonogram projektu",
            },
            {
              step: 2,
              title: "Cenová nabídka",
              description: "Připravíme detailní nabídku na míru",
            },
            {
              step: 3,
              title: "Koordinace",
              description: "Projektový manažer koordinuje všechny práce",
            },
            {
              step: 4,
              title: "Realizace",
              description: "Postupné úklidy dle plánu projektu",
            },
          ]}
          stats={[
            { value: "50+", label: "Developerských projektů", icon: "🏗️" },
            { value: "5000+", label: "Vyčištěných bytů", icon: "🏠" },
            { value: "100%", label: "Dodržení termínů", icon: "⏰" },
            { value: "15+", label: "Let zkušeností", icon: "📅" },
          ]}
          guarantees={[
            "Dedikovaný projektový manažer - jeden kontakt pro všechno",
            "Pravidelný reporting s fotodokumentací - máte přehled o postupu",
            "Flexibilní kapacita - dokážeme nasadit více týmů současně",
            "SLA garanty - jasně definovaná úroveň služeb",
          ]}
          whatsIncluded={
            t("serviceData.development.whatsIncluded", {
              returnObjects: true,
            }) as string[]
          }
          faqItems={[
            {
              question: "Máte zkušenosti s velkými projekty?",
              answer:
                "Ano, máme reference z projektů od 20 do 200+ bytových jednotek. Disponujeme dostatečnou kapacitou a zkušenostmi s koordinací velkých projektů.",
            },
            {
              question: "Jak probíhá koordinace s ostatními firmami?",
              answer:
                "Máme projektového manažera, který koordinuje práce s generálním dodavatelem a ostatními profesemi. Používáme moderní nástroje pro komunikaci a reporting.",
            },
            {
              question: "Poskytujete pravidelný reporting?",
              answer:
                "Ano, poskytujeme týdenní/měsíční reporting s fotodokumentací, popisem provedených prací a plánem na další období.",
            },
            {
              question: "Dokážete dodržet přísné termíny?",
              answer:
                "Ano, máme zkušenosti s náročnými termíny. V případě potřeby dokážeme nasadit více týmů současně a pracovat i o víkendech.",
            },
            {
              question: "Nabízíte individuální cenové podmínky?",
              answer:
                "Ano, pro velké projekty vytváříme cenovou nabídku na míru s ohledem na rozsah, četnost a délku spolupráce.",
            },
            {
              question: "Máte pojištění pro developerské projekty?",
              answer:
                "Ano, máme profesionální pojištění odpovědnosti do výše 10 mil. Kč, což je standard pro práci na developerských projektech.",
            },
          ]}
          testimonials={[
            {
              name: "Ing. Petr Novák",
              role: "Developer",
              text: "Spolupracovali jsme na projektu 85 bytů. Perfektní koordinace, dodržení termínů a výborná komunikace. Určitě budeme pokračovat.",
              rating: 5,
            },
            {
              name: "Jan Malý",
              role: "Generální dodavatel",
              text: "Konečně úklidová firma, která rozumí stavebním procesům. Flexibilní, rychlí a hlavně spolehliví.",
              rating: 5,
            },
            {
              name: "Martina Kovářová",
              role: "Project Manager",
              text: "Oceňuji zejména jejich reporting a proaktivní přístup. Vždy včas upozorní na případné problémy.",
              rating: 5,
            },
          ]}
          galleryImages={[
            {
              img: "https://images.unsplash.com/photo-1759931373726-298a1df1960c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wbWVudCUyMHByb2plY3QlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjIyNTA2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "Developerské projekty",
            },
            {
              img: "https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "Velké projekty",
            },
            {
              img: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "Před předáním",
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
