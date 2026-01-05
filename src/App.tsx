import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicePage } from './components/ServicePage';
import { HomeCleaningPage } from './components/HomeCleaningPage';
import { Partners } from './components/Partners';
import { FAQ } from './components/FAQ';
import { FloatingActionButton } from './components/FloatingActionButton';
import { CookieConsent } from './components/CookieConsent';
import { Button } from './components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('homepage');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Service data
  const servicesData = {
    home: {
      title: 'Úklid bytů a domů',
      description: 'Profesionální úklidové služby pro domácnosti. Zajistíme čistý a příjemný domov pro vás a vaši rodinu.',
      features: [
        'Pravidelný týdenní nebo měsíční úklid',
        'Generální úklidy bytů a domů',
        'Úklid po malování a rekonstrukci',
        'Mytí oken a leštění podlah',
        'Žehlení a péče o prádlo',
        'Individuální plán úklidu dle vašich potřeb',
        'Vlastní ekologické čisticí prostředky',
        'Flexibilní termíny a možnost klíčové služby'
      ],
      image: 'https://images.unsplash.com/photo-1758272422189-b10f36fd4ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGhvbWUlMjBhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzYyMzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: 'Malý byt',
          price: '900 Kč',
          unit: 'za úklid',
          features: ['Do 50 m²', 'Kompletní úklid', '2-3 hodiny', 'Pravidelná sleva 10%']
        },
        {
          name: 'Střední byt',
          price: '1400 Kč',
          unit: 'za úklid',
          features: ['50-100 m²', 'Kompletní úklid', '3-4 hodiny', 'Možnost žehlení', 'Pravidelná sleva 15%']
        },
        {
          name: 'Velký dům',
          price: 'Od 2000 Kč',
          unit: 'individuální cena',
          features: ['Nad 100 m²', 'Dedikovaný tým', 'Kompletní péče', 'Flexibilní rozsah služeb']
        }
      ]
    },
    office: {
      title: 'Úklid kanceláří a firem Praha',
      description: 'Profesionální úklid kancelářských prostor s garantovanou kvalitou. Zajistíme čisté a příjemné pracovní prostředí pro vaše zaměstnance.',
      features: [
        'Pravidelný denní, týdenní nebo měsíční úklid',
        'Úklid kanceláří, společných prostor a sociálních zařízení',
        'Dezinfekce často dotýkaných ploch',
        'Doplňování hygienických potřeb',
        'Mytí oken a žaluzií',
        'Flexibilní termíny dle potřeb vaší firmy',
        'Pojištění odpovědnosti za škodu',
        'Možnost úklidu mimo pracovní dobu'
      ],
      image: 'https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHRlYW0lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMjEyMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: 'Malé kanceláře',
          price: '30 Kč/m²',
          unit: 'za úklid',
          features: ['Do 100 m²', 'Základní úklid', 'Flexibilní termíny', 'Pravidelné úklidy']
        },
        {
          name: 'Střední kanceláře',
          price: '25 Kč/m²',
          unit: 'za úklid',
          features: ['100-300 m²', 'Kompletní úklid', 'Stálý tým', 'Account manager', 'Sleva 15%']
        },
        {
          name: 'Velké kanceláře',
          price: 'Od 20 Kč/m²',
          unit: 'individuální cena',
          features: ['Nad 300 m²', 'Dedikovaný tým', 'SLA garanty', 'Reporting', '24/7 podpora']
        }
      ]
    },
    airbnb: {
      title: 'Úklid Airbnb bytů',
      description: 'Rychlý a důkladný úklid mezi hosty s garancí termínu. Pomůžeme vám udržet vysoké hodnocení vašeho Airbnb.',
      features: [
        'Úklid v den check-outu a před check-inem',
        'Výměna ložního prádla a ručníků',
        'Kontrola funkčnosti všech zařízení',
        'Doplnění základních hygienických potřeb',
        'Foto dokumentace pro vaši kontrolu',
        'Hlášení případných závad',
        'Flexibilní dostupnost 7 dní v týdnu',
        'Speciální ceny pro pravidelné úklidy'
      ],
      image: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: 'Byt 1+kk',
          price: '800 Kč',
          unit: 'za úklid',
          features: ['Do 35 m²', 'Kompletní úklid', 'Výměna prádla']
        },
        {
          name: 'Byt 2+kk/3+kk',
          price: '1200 Kč',
          unit: 'za úklid',
          features: ['35-70 m²', 'Kompletní úklid', 'Výměna prádla', 'Foto dokumentace']
        },
        {
          name: 'Velké byty',
          price: 'Od 1500 Kč',
          unit: 'za úklid',
          features: ['Nad 70 m²', 'Kompletní úklid', 'Výměna prádla', 'Express možnost']
        }
      ]
    },
    furniture: {
      title: 'Čištění nábytku a sedaček',
      description: 'Profesionální mokré a suché čištění čalouněného nábytku. Odstranění skvrn, pachů a alergenů pomocí špičkové technologie.',
      features: [
        'Hloubkové čištění sedacích souprav',
        'Čištění koberců a kobercových podlah',
        'Odstranění skvrn a pachů',
        'Dezinfekce a antialergenní ošetření',
        'Šetrné k materiálům',
        'Rychlé schnutí díky moderní technologii',
        'Ekologické čisticí prostředky',
        'Možnost impregnace proti skvrnám'
      ],
      image: 'https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMHNvZmF8ZW58MXx8fHwxNzYxMTQ0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: 'Čištění sedaček',
          price: 'Od 800 Kč',
          unit: 'za kus',
          features: ['Křeslo: 800 Kč', 'Sedačka 2-místná: 1400 Kč', 'Sedačka 3-místná: 1800 Kč']
        },
        {
          name: 'Čištění koberců',
          price: '120 Kč/m²',
          unit: 'za metr čtvereční',
          features: ['Hloubkové čištění', 'Odstranění skvrn', 'Dezinfekce']
        },
        {
          name: 'Impregnace',
          price: 'Od 400 Kč',
          unit: 'za kus',
          features: ['Ochrana proti skvrnám', 'Prodloužení životnosti', 'Snazší údržba']
        }
      ]
    },
    renovation: {
      title: 'Úklid po rekonstrukci a stavbě',
      description: 'Kompletní odstranění stavebního prachu a nečistot. Připravíme prostor k okamžitému užívání nebo předání.',
      features: [
        'Odstranění stavebního prachu a špíny',
        'Mytí oken, rámů a parapetů',
        'Čištění podlah a dlažby',
        'Úklid koupelen a kuchyní',
        'Odstranění štítků a lepidel',
        'Vyleštění obkladů a dlažby',
        'Finální úklid před předáním',
        'Možnost pravidelných úklidů během stavby'
      ],
      image: 'https://images.unsplash.com/photo-1661746785480-439c1a4b8254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjExNDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: 'Hrubý úklid',
          price: '25 Kč/m²',
          unit: 'za metr čtvereční',
          features: ['Odstranění prachu', 'Čištění podlah', 'Základní mytí oken']
        },
        {
          name: 'Finální úklid',
          price: '35 Kč/m²',
          unit: 'za metr čtvereční',
          features: ['Kompletní úklid', 'Leštění povrchů', 'Důkladné mytí oken', 'Připraven k předání']
        },
        {
          name: 'Komplexní balíček',
          price: 'Na míru',
          unit: 'individuální cena',
          features: ['Hrubý + finální', 'Pravidelný úklid během stavby', 'Dedikovaný tým']
        }
      ]
    },
    development: {
      title: 'Úklid developerských projektů',
      description: 'Komplexní úklidové služby pro developerské projekty všech velikostí. Zkušenosti s rozsáhlými projekty a novostavbami.',
      features: [
        'Úklid během výstavby',
        'Finální úklid před předáním bytů',
        'Koordinace s dalšími profesemi',
        'Kapacita pro velké projekty',
        'Dodržení termínů',
        'Kompletní dokumentace',
        'Individuální cenová nabídka',
        'Reference z realizovaných projektů'
      ],
      image: 'https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: 'Malé projekty',
          price: 'Od 30 Kč/m²',
          unit: 'za metr čtvereční',
          features: ['Do 10 bytů', 'Kompletní úklid', 'Flexibilní termíny']
        },
        {
          name: 'Střední projekty',
          price: 'Od 25 Kč/m²',
          unit: 'za metr čtvereční',
          features: ['10-50 bytů', 'Dedikovaný tým', 'Koordinace', 'Reporting']
        },
        {
          name: 'Velké projekty',
          price: 'Individuální',
          unit: 'na poptávku',
          features: ['Nad 50 bytů', 'Kompletní správa', 'SLA garanty', '24/7 dostupnost']
        }
      ]
    },
    buildings: {
      title: 'Úklid panelových domů a SVJ',
      description: 'Pravidelný úklid společných prostor bytových domů. Zajistíme čisté a příjemné prostředí pro všechny obyvatele.',
      features: [
        'Úklid chodeb a schodišť',
        'Úklid výtahů a vstupních prostor',
        'Úklid společných prostor',
        'Úklid sklepů a půd',
        'Péče o okolí domu',
        'Pravidelnost a spolehlivost',
        'Individuální frekvence úklidu',
        'Transparentní reporting pro SVJ'
      ],
      image: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: 'Malý dům',
          price: 'Od 3000 Kč',
          unit: 'měsíčně',
          features: ['Do 12 bytů', '2x týdně', 'Základní úklid', 'Flexibilní termíny']
        },
        {
          name: 'Střední dům',
          price: 'Od 6000 Kč',
          unit: 'měsíčně',
          features: ['12-30 bytů', '3x týdně', 'Kompletní úklid', 'Reporting pro SVJ']
        },
        {
          name: 'Velký dům',
          price: 'Individuální',
          unit: 'na poptávku',
          features: ['Nad 30 bytů', 'Denní úklid', 'Dedikovaný personál', 'Kompletní správa']
        }
      ]
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'homepage':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Partners />
            <Services onNavigate={handleNavigate} />
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" style={{backgroundColor: 'rgba(255, 168, 38, 0.2)'}}></div>
              </div>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
              
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-6 sm:mb-8 shadow-lg">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#FFA826'}}></div>
                    <span className="text-xs sm:text-sm text-white">Připraveni začít?</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 px-4">
                    Získejte{' '}
                    <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #FFB84D, #FFA826, #FFB84D)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
                      nezávaznou nabídku
                    </span>
                  </h2>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-green-50 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                    Kontaktujte nás ještě dnes a získejte cenovou nabídku šitou přímo vašim potřebám
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-white hover:bg-gray-50 text-green-700 shadow-2xl hover:shadow-white/50 hover:scale-105 sm:hover:scale-110 transition-all duration-300 border-0 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7"
                    onClick={() => handleNavigate('contact')}
                  >
                    Nezávazná poptávka
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>
            <About />
            <References />
            <FAQ />
          </>
        );
      
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      
      case 'home':
        return <HomeCleaningPage onNavigate={handleNavigate} />;
      
      case 'office':
        return (
          <ServicePage
            title={servicesData.office.title}
            description={servicesData.office.description}
            features={servicesData.office.features}
            image={servicesData.office.image}
            pricing={servicesData.office.pricing}
            stats={[
              { value: '500+', label: 'Spokojených firem', icon: '🏢' },
              { value: '10 let', label: 'Na trhu', icon: '⭐' },
              { value: '98%', label: 'Spokojenost', icon: '😊' },
              { value: '24/7', label: 'Podpora', icon: '📞' }
            ]}
            whatsIncluded={[
              'Vysávání všech podlahových ploch',
              'Vytírání tvrdých podlah',
              'Dezinfekce pracovních stolů',
              'Čištění kuchyněk a odpočinkových prostor',
              'Úklid WC a umýváren',
              'Vynášení odpadkových košů',
              'Doplňování toaletního papíru a mýdla',
              'Otírání prachu z povrchů',
              'Mytí skleněných přepážek',
              'Pravidelné generální úklidy'
            ]}
            faqItems={[
              {
                question: 'Uklízíte i mimo pracovní dobu?',
                answer: 'Ano, můžeme provádět úklid před začátkem pracovní doby, po jejím ukončení nebo o víkendech, abychom nerušili provoz vaší firmy.'
              },
              {
                question: 'Jak často byste doporučili úklid kanceláří?',
                answer: 'Pro standardní kanceláře doporučujeme úklid 2-3x týdně. Pro prostory s vyšším provozem je vhodnější denní úklid. Vše záleží na velikosti a intenzitě využití prostor.'
              },
              {
                question: 'Poskytujete vlastní čistící prostředky?',
                answer: 'Ano, používáme profesionální ekologické prostředky a moderní vybavení. Můžeme však použít i vaše produkty, pokud to preferujete.'
              },
              {
                question: 'Máte reference od firem?',
                answer: 'Ano, uklízíme kanceláře pro více než 50 firem v Praze. Rádi vám poskytneme kontakty na reference.'
              },
              {
                question: 'Co když není s úklidem spokojenost?',
                answer: 'Máme garanci kvality - pokud nebudete spokojeni, vrátíme se a problém napravíme zdarma do 24 hodin.'
              },
              {
                question: 'Nabízíte dlouhodobé smlouvy se slevou?',
                answer: 'Ano, při pravidelné spolupráci nabízíme výhodné ceny a individuální slevy dle rozsahu služeb.'
              }
            ]}
            testimonials={[
              {
                name: 'Tomáš Dvořák',
                role: 'CEO IT společnosti',
                text: 'Spolupracujeme již 3 roky. Týmy jsou vždy profesionální, diskrétní a dodržují všechny naše bezpečnostní požadavky.',
                rating: 5
              },
              {
                name: 'Lucie Marková',
                role: 'Office Manager',
                text: 'Konečně úklidová firma, na kterou je spolehnutí. Flexibilní, komunikativní a hlavně spolehliví. Doporučuji!',
                rating: 5
              },
              {
                name: 'Pavel Černý',
                role: 'Facility Manager',
                text: 'Perfektní kvalita za rozumnou cenu. Oceňuji zejména jejich proaktivní přístup a pravidelný reporting.',
                rating: 5
              }
            ]}
            galleryImages={[
              { img: 'https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NjIyMzMwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Moderní kanceláře' },
              { img: 'https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHRlYW0lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMjEyMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Profesionální tým' },
              { img: 'https://images.unsplash.com/photo-1747659362772-3caabc37c579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIyNDk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Moderní technologie' }
            ]}
            onNavigate={handleNavigate}
          />
        );
      
      case 'airbnb':
        return (
          <ServicePage
            title={servicesData.airbnb.title}
            description={servicesData.airbnb.description}
            features={servicesData.airbnb.features}
            image={servicesData.airbnb.image}
            pricing={servicesData.airbnb.pricing}
            process={[
              { step: 1, title: 'Check-out hosta', description: 'Přijedeme po odjezdu hosta' },
              { step: 2, title: 'Kontrola stavu', description: 'Zkontrolujeme byt a pořídíme fotky' },
              { step: 3, title: 'Úklid', description: 'Důkladně uklidíme celý prostor' },
              { step: 4, title: 'Připraven pro hosta', description: 'Byt je čistý a připraven' }
            ]}
            guarantees={[
              'Garantovaný termín úklidu - vždy stihneme před check-inem dalšího hosta',
              'Foto dokumentace po každém úklidu - máte přehled o stavu bytu',
              'Okamžité hlášení závad - nic vás nepřekvapí',
              'Flexibilní dostupnost 7 dní v týdnu - uklízíme i večer a o víkendech'
            ]}
            whatsIncluded={[
              'Kompletní vysávání a vytírání',
              'Výměna všeho ložního prádla',
              'Výměna ručníků a utěrek',
              'Čištění a dezinfekce koupelny',
              'Úklid kuchyně včetně spotřebičů',
              'Kontrola funkčnosti všech zařízení',
              'Doplnění základních hygienických potřeb',
              'Vynášení odpadků',
              'Větrání prostoru',
              'Foto dokumentace hotového úklidu'
            ]}
            faqItems={[
              {
                question: 'Jak rychle dokážete uklidit mezi hosty?',
                answer: 'Standardní úklid 1+kk zvládneme za 1,5-2 hodiny. Větší byty 2-3 hodiny. Nabízíme i express službu s příplatkem 20% pro situace, kdy je čas mezi hosty velmi krátký.'
              },
              {
                question: 'Poskytujete ložní prádlo a ručníky?',
                answer: 'Můžeme zajistit praní vašeho prádla nebo dodávat vlastní kvalitní hotelové prádlo za příplatek. Vše dle vašich preferencí.'
              },
              {
                question: 'Co když host způsobí nadměrné znečištění?',
                answer: 'V takovém případě vás okamžitě kontaktujeme s fotodokumentací a nabídneme řešení. Účtujeme dle skutečného rozsahu prací.'
              },
              {
                question: 'Můžete uklidit i večer nebo o víkendu?',
                answer: 'Ano, jsme k dispozici 7 dní v týdnu včetně večerních hodin. Rozumíme tomu, že check-outy a check-iny jsou často v nestandardních časech.'
              },
              {
                question: 'Hlásíte i drobné závady?',
                answer: 'Ano, kontrolujeme funkčnost všech zařízení a případné závady nebo chybějící vybavení vám okamžitě nahlásíme.'
              },
              {
                question: 'Jak probíhá komunikace a objednávání?',
                answer: 'Můžete nám zaslat kalendář rezervací a my úklidy naplánujeme automaticky. Komunikujeme přes WhatsApp, email nebo telefon - jak vám vyhovuje.'
              }
            ]}
            testimonials={[
              {
                name: 'Petra Nováková',
                role: 'Majitelka 5 Airbnb',
                text: 'Uklízí mé byty už 2 roky. Hosté stále chválí čistotu a já mám klid. Foto dokumentace je skvělá věc!',
                rating: 5
              },
              {
                name: 'Jakub Svoboda',
                role: 'Host Manager',
                text: 'Spravuji 12 bytů a GreenClean je pro mě naprostá jistota. Vždy včas, vždy perfektně uklizeno.',
                rating: 5
              },
              {
                name: 'Andrea Malá',
                role: 'Investorka',
                text: 'Spolehlivost a kvalita za férovou cenu. Hodnocení mých bytů výrazně stoupla od doby, co uklízí GreenClean.',
                rating: 5
              }
            ]}
            galleryImages={[
              { img: 'https://images.unsplash.com/photo-1589803010842-41cdf85bf0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGFwYXJ0bWVudCUyMGFpcmJuYnxlbnwxfHx8fDE3NjIyNTA2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Čisté Airbnb byty' },
              { img: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Moderní prostory' },
              { img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Připraveno pro hosty' }
            ]}
            onNavigate={handleNavigate}
          />
        );
      
      case 'furniture':
        return (
          <ServicePage
            title={servicesData.furniture.title}
            description={servicesData.furniture.description}
            features={servicesData.furniture.features}
            image={servicesData.furniture.image}
            pricing={servicesData.furniture.pricing}
            stats={[
              { value: '15 000+', label: 'Vyčištěných kusů', icon: '🛋️' },
              { value: '100%', label: 'Ekologické', icon: '🌿' },
              { value: '2-4h', label: 'Schnutí', icon: '⏱️' },
              { value: '5★', label: 'Hodnocení', icon: '⭐' }
            ]}
            process={[
              { step: 1, title: 'Prohlídka', description: 'Zkontrolujeme typ materiálu a skvrn' },
              { step: 2, title: 'Předčištění', description: 'Vysajeme a aplikujeme čističe' },
              { step: 3, title: 'Hloubkové čištění', description: 'Profesionální mokré čištění' },
              { step: 4, title: 'Sušení', description: 'Rychlé sušení a kontrola' }
            ]}
            whatsIncluded={[
              'Vysávání a předčištění povrchu',
              'Hloubkové mokré čištění',
              'Odstranění skvrn speciálními prostředky',
              'Dezinfekce a odstranění bakterií',
              'Neutralizace nepříjemných pachů',
              'Antialergenní ošetření',
              'Rychlé sušení profesionálním zařízením',
              'Volitelná impregnace proti skvrnám',
              'Kontrola výsledku',
              'Rady pro následnou péči'
            ]}
            faqItems={[
              {
                question: 'Jak dlouho trvá schnutí?',
                answer: 'Díky moderní technologii je nábytek vlhký jen lehce a je možné jej používat již za 2-4 hodiny. Kompletní vyschnutí trvá 6-12 hodin dle materiálu.'
              },
              {
                question: 'Dokážete odstranit staré skvrny?',
                answer: 'Většinu skvrn ano. Máme speciální prostředky na víno, kávu, krev, tuky atd. U velmi starých skvrn nemůžeme garantovat 100% odstranění, ale vždy se snažíme o maximální výsledek.'
              },
              {
                question: 'Je čištění bezpečné pro děti a domácí mazlíčky?',
                answer: 'Ano, používáme ekologické, certifikované prostředky, které jsou bezpečné pro celou rodinu včetně dětí a zvířat.'
              },
              {
                question: 'Čistíte i kožený nábytek?',
                answer: 'Ano, máme speciální procedury a prostředky pro kůži a koženku. Čištění včetně následného ošetření a výživy kůže.'
              },
              {
                question: 'Co impregnace a k čemu slouží?',
                answer: 'Impregnace vytváří neviditelnou ochrannou vrstvu, která odpuzuje tekutiny a nečistoty. Prodlužuje životnost nábytku a usnadňuje běžnou údržbu.'
              },
              {
                question: 'Musím nábytek nějak připravit?',
                answer: 'Ideálně odstraňte volné předměty (polštáře, deky atd.). My se již postaráme o kompletní přípravu a následný úklid.'
              }
            ]}
            testimonials={[
              {
                name: 'Markéta Horáková',
                role: 'Majitelka domu',
                text: 'Sedačka vypadá jako nová! Nevěřila jsem, že se skvrny po dětech podaří odstranit. Fantastická práce!',
                rating: 5
              },
              {
                name: 'David Novotný',
                role: 'Restauratér',
                text: 'Čistíme u nich veškerý nábytek v restauraci. Profesionální přístup, rychlé schnutí, žádné prostoje.',
                rating: 5
              },
              {
                name: 'Ivana Králová',
                role: 'Designérka interiérů',
                text: 'Doporučuji všem svým klientům. Vždy špičková kvalita a šetrný přístup k luxusním materiálům.',
                rating: 5
              }
            ]}
            galleryImages={[
              { img: 'https://images.unsplash.com/photo-1658501238841-da09649a94f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMGNvdWNofGVufDF8fHx8MTc2MjI1MDY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Čištění sedaček' },
              { img: 'https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMHNvZmF8ZW58MXx8fHwxNzYxMTQ0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Profesionální péče' },
              { img: 'https://images.unsplash.com/photo-1747659362772-3caabc37c579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIyNDk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Moderní technologie' }
            ]}
            onNavigate={handleNavigate}
          />
        );
      
      case 'renovation':
        return (
          <ServicePage
            title={servicesData.renovation.title}
            description={servicesData.renovation.description}
            features={servicesData.renovation.features}
            image={servicesData.renovation.image}
            pricing={servicesData.renovation.pricing}
            stats={[
              { value: '1000+', label: 'Projektů', icon: '🏗️' },
              { value: '100%', label: 'Dodržení termínů', icon: '✅' },
              { value: '50+', label: 'Týmů', icon: '👷' },
              { value: 'A+', label: 'Reference', icon: '🏆' }
            ]}
            guarantees={[
              'Přesné dodržení termínu - stavba nebude zdržena kvůli úklidu',
              'Kompletní odstranění stavebního prachu - prostor bude perfektně čistý',
              'Ochrana dokončených povrchů - pracujeme s maximální péčí',
              'Možnost pravidelných úklidů během stavby - udržíme pracovní prostor čistý'
            ]}
            whatsIncluded={[
              'Odstranění hrubých nečistot a suti',
              'Vysávání stavebního prachu',
              'Mokré čištění všech podlah',
              'Mytí oken zevnitř i zvenčí',
              'Čištění rámů a parapetů',
              'Odstranění lepidel a štítků',
              'Leštění obkladů a dlažby',
              'Čištění koupelen a WC',
              'Úklid kuchyňských linek',
              'Finální kontrola a dotírání detailů'
            ]}
            faqItems={[
              {
                question: 'Kdy je nejlepší čas na úklid po rekonstrukci?',
                answer: 'Ideální je nejprve hrubý úklid po dokončení stavebních prací a následně finální úklid těsně před předáním. Můžeme také provádět pravidelné úklidy během rekonstrukce.'
              },
              {
                question: 'Odstraníte i stavební materiály?',
                answer: 'Odstraňujeme stavební prach, špínu a drobné zbytky. Velké množství suti nebo materiálů musí být odklizeno stavební firmou předem.'
              },
              {
                question: 'Jak dlouho trvá úklid po rekonstrukci?',
                answer: 'Pro byt 3+1 počítejte s 6-10 hodinami dle stupně znečištění. Větší prostory nebo velmi špinavé plochy mohou trvat i několik dnů.'
              },
              {
                question: 'Uklízíte i exteriéry, balkony?',
                answer: 'Ano, nabízíme kompletní službu včetně mytí oken zvenčí, čištění balkonů, teras a bezprostředního okolí.'
              },
              {
                question: 'Máte zkušenosti s luxusními materiály?',
                answer: 'Ano, máme zkušenosti s mramorem, žulou, designovými dlažbami, dřevěnými podlahami a dalšími náročnými materiály.'
              },
              {
                question: 'Můžeme objednat pouze mytí oken?',
                answer: 'Ano, nabízíme i samostatné mytí oken nebo jiné dílčí služby dle vašich potřeb.'
              }
            ]}
            testimonials={[
              {
                name: 'Milan Procházka',
                role: 'Majitel bytu',
                text: 'Po rekonstrukci byl byt v hrozném stavu. Za jeden den udělali zázrak - prostor připravený k nastěhování!',
                rating: 5
              },
              {
                name: 'Radek Veselý',
                role: 'Stavební firma',
                text: 'Spolupracujeme pravidelně. Vždy perfektní výsledek, dodržení termínů. Spolehlivý partner pro předání staveb.',
                rating: 5
              },
              {
                name: 'Zuzana Fischerová',
                role: 'Developerka',
                text: 'Profesionální přístup a výborná komunikace. Jejich práce výrazně zjednodušuje předávání bytů klientům.',
                rating: 5
              }
            ]}
            galleryImages={[
              { img: 'https://images.unsplash.com/photo-1738348157125-339841af31fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjByZW5vdmF0aW9uJTIwZHVzdHxlbnwxfHx8fDE3NjIyNTA2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Po rekonstrukci' },
              { img: 'https://images.unsplash.com/photo-1661746785480-439c1a4b8254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjExNDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Stavební úklid' },
              { img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Finální výsledek' }
            ]}
            onNavigate={handleNavigate}
          />
        );
      
      case 'development':
        return (
          <ServicePage
            title={servicesData.development.title}
            description={servicesData.development.description}
            features={servicesData.development.features}
            image={servicesData.development.image}
            pricing={servicesData.development.pricing}
            process={[
              { step: 1, title: 'Úvodní jednání', description: 'Prodiskutujeme rozsah a harmonogram projektu' },
              { step: 2, title: 'Cenová nabídka', description: 'Připravíme detailní nabídku na míru' },
              { step: 3, title: 'Koordinace', description: 'Projektový manažer koordinuje všechny práce' },
              { step: 4, title: 'Realizace', description: 'Postupné úklidy dle plánu projektu' }
            ]}
            stats={[
              { value: '50+', label: 'Developerských projektů', icon: '🏗️' },
              { value: '5000+', label: 'Vyčištěných bytů', icon: '🏠' },
              { value: '100%', label: 'Dodržení termínů', icon: '⏰' },
              { value: '15+', label: 'Let zkušeností', icon: '📅' }
            ]}
            guarantees={[
              'Dedikovaný projektový manažer - jeden kontakt pro všechno',
              'Pravidelný reporting s fotodokumentací - máte přehled o postupu',
              'Flexibilní kapacita - dokážeme nasadit více týmů současně',
              'SLA garanty - jasně definovaná úroveň služeb'
            ]}
            whatsIncluded={[
              'Koordinace s generálním dodavatelem',
              'Úklid během výstavby (mezifáze)',
              'Hrubý úklid po dokončení prací',
              'Finální úklid před předáním',
              'Mytí všech oken a zasklení',
              'Kompletní dokumentace',
              'Reporting průběhu prací',
              'Dedikovaný projektový manažer',
              'Kapacita pro velké projekty',
              'Dodržení termínů předání'
            ]}
            faqItems={[
              {
                question: 'Máte zkušenosti s velkými projekty?',
                answer: 'Ano, máme reference z projektů od 20 do 200+ bytových jednotek. Disponujeme dostatečnou kapacitou a zkušenostmi s koordinací velkých projektů.'
              },
              {
                question: 'Jak probíhá koordinace s ostatními firmami?',
                answer: 'Máme projektového manažera, který koordinuje práce s generálním dodavatelem a ostatními profesemi. Používáme moderní nástroje pro komunikaci a reporting.'
              },
              {
                question: 'Poskytujete pravidelný reporting?',
                answer: 'Ano, poskytujeme týdenní/měsíční reporting s fotodokumentací, popisem provedených prací a plánem na další období.'
              },
              {
                question: 'Dokážete dodržet přísné termíny?',
                answer: 'Ano, máme zkušenosti s náročnými termíny. V případě potřeby dokážeme nasadit více týmů současně a pracovat i o víkendech.'
              },
              {
                question: 'Nabízíte individuální cenové podmínky?',
                answer: 'Ano, pro velké projekty vytváříme cenovou nabídku na míru s ohledem na rozsah, četnost a délku spolupráce.'
              },
              {
                question: 'Máte pojištění pro developerské projekty?',
                answer: 'Ano, máme profesionální pojištění odpovědnosti do výše 10 mil. Kč, což je standard pro práci na developerských projektech.'
              }
            ]}
            testimonials={[
              {
                name: 'Ing. Petr Novák',
                role: 'Developer',
                text: 'Spolupracovali jsme na projektu 85 bytů. Perfektní koordinace, dodržení termínů a výborná komunikace. Určitě budeme pokračovat.',
                rating: 5
              },
              {
                name: 'Jan Malý',
                role: 'Generální dodavatel',
                text: 'Konečně úklidová firma, která rozumí stavebním procesům. Flexibilní, rychlí a hlavně spolehliví.',
                rating: 5
              },
              {
                name: 'Martina Kovářová',
                role: 'Project Manager',
                text: 'Oceňuji zejména jejich reporting a proaktivní přístup. Vždy včas upozorní na př��padné problémy.',
                rating: 5
              }
            ]}
            galleryImages={[
              { img: 'https://images.unsplash.com/photo-1759931373726-298a1df1960c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wbWVudCUyMHByb2plY3QlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjIyNTA2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Developerské projekty' },
              { img: 'https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Velké projekty' },
              { img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Před předáním' }
            ]}
            onNavigate={handleNavigate}
          />
        );
      
      case 'buildings':
        return (
          <ServicePage
            title={servicesData.buildings.title}
            description={servicesData.buildings.description}
            features={servicesData.buildings.features}
            image={servicesData.buildings.image}
            pricing={servicesData.buildings.pricing}
            process={[
              { step: 1, title: 'Prohlídka domu', description: 'Zjistíme rozsah a specifika domu' },
              { step: 2, title: 'Návrh harmonogramu', description: 'Navrhneme optimální frekvenci úklidu' },
              { step: 3, title: 'Prezentace výboru', description: 'Představíme se výboru SVJ' },
              { step: 4, title: 'Pravidelný úklid', description: 'Zajistíme spolehlivý úklid dle plánu' }
            ]}
            stats={[
              { value: '150+', label: 'Spravovaných domů', icon: '🏘️' },
              { value: '5000+', label: 'Spokojených obyvatel', icon: '👨‍👩‍👧‍👦' },
              { value: '99%', label: 'Spokojenost SVJ', icon: '😊' },
              { value: '8 let', label: 'Průměrná délka spolupráce', icon: '🤝' }
            ]}
            whatsIncluded={[
              'Úklid schodišť a chodeb',
              'Mytí z��bradlí a madel',
              'Úklid vstupních prostor',
              'Čištění výtahů',
              'Mytí vchodových dveří',
              'Úklid společných prostor',
              'Péče o okolí domu',
              'Úklid sklepů a půd (dle dohody)',
              'Pravidelný reporting pro SVJ',
              'Komunikace s výborem SVJ'
            ]}
            faqItems={[
              {
                question: 'Jak často doporučujete úklid domu?',
                answer: 'Standardně 2-3x týdně pro běžné domy. Pro domy s vyšším provozem nebo luxusnější objekty doporučujeme denní úklid.'
              },
              {
                question: 'Co všechno zahrnuje pravidelný úklid?',
                answer: 'Vysávání a mytí schodišť, chodeb, úklid výtahů, mytí vstupních prostor, zábradlí a dveří. Péče o okolí domu dle dohody.'
              },
              {
                question: 'Poskytujete reporting pro SVJ?',
                answer: 'Ano, pravidelně poskytujeme písemný reporting o provedených pracích, případných závadách a doporučeních. Vše přizpůsobíme požadavkům výboru.'
              },
              {
                question: 'Jak to funguje při změně smluvní firmy?',
                answer: 'Pomůžeme s hladkým přechodem. První měsíc můžeme poskytovat služby se zkušební slevou, aby si obyvatelé zvykli na nový systém.'
              },
              {
                question: 'Uklízíte i o víkendech?',
                answer: 'Ano, harmonogram přizpůsobíme potřebám domu. Můžeme provádět úklid i o víkendech, pokud je to pro obyvatele výhodnější.'
              },
              {
                question: 'Jak řešíte reklamace od obyvatel?',
                answer: 'Máme přímou linku pro nahlášení problémů. Reklamace řešíme do 24 hodin. Vždy komunikujeme s výborem SVJ a snažíme se najít rychlé řešení.'
              }
            ]}
            testimonials={[
              {
                name: 'Vladimír Horák',
                role: 'Předseda SVJ',
                text: 'Uklízí náš dům už 4 roky. Obyvatelé jsou spokojení, reporting je přehledný a cena férová. Doporučuji!',
                rating: 5
              },
              {
                name: 'Eva Dvořáková',
                role: 'Členka výboru SVJ',
                text: 'Profesionální přístup a výborná komunikace. Konečně máme úklidovou firmu, na kterou je spolehnutí.',
                rating: 5
              },
              {
                name: 'Josef Veselý',
                role: 'Správce nemovitostí',
                text: 'Starám se o 8 domů a všude jsem přešel na GreenClean. Kvalita, spolehlivost a férové ceny.',
                rating: 5
              }
            ]}
            galleryImages={[
              { img: 'https://images.unsplash.com/photo-1630699293333-88b76da1405d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGhhbGx3YXl8ZW58MXx8fHwxNzYyMjUwNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Společné prostory' },
              { img: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Panelové domy' },
              { img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Čisté prostředí' }
            ]}
            onNavigate={handleNavigate}
          />
        );
      
      case 'pricing':
        return (
          <>
            <Pricing onNavigate={handleNavigate} />
            <Contact />
          </>
        );
      
      case 'about':
        return (
          <>
            <About />
            <Contact />
          </>
        );
      
      case 'references':
        return (
          <>
            <References />
            <Contact />
          </>
        );
      
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Partners />
            <Services onNavigate={handleNavigate} />
            <section className="py-16 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" style={{backgroundColor: 'rgba(255, 168, 38, 0.2)'}}></div>
              </div>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
              
              <div className="container mx-auto px-8 lg:px-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-8 shadow-lg">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#FFA826'}}></div>
                    <span className="text-sm text-white">Připraveni začít?</span>
                  </div>
                  
                  <h2 className="text-5xl lg:text-6xl text-white mb-6">
                    Získejte{' '}
                    <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #FFB84D, #FFA826, #FFB84D)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
                      nezávaznou nabídku
                    </span>
                  </h2>
                  
                  <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Kontaktujte nás ještě dnes a získejte cenovou nabídku šitou přímo vašim potřebám
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-white hover:bg-gray-50 text-green-700 shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all duration-300 border-0 text-lg px-10 py-7"
                    onClick={() => handleNavigate('contact')}
                  >
                    Nezávazná poptávka
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>
            <About />
            <References />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingActionButton onNavigate={handleNavigate} />
      <CookieConsent />
    </div>
  );
}