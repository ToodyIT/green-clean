import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(`/${page === 'homepage' ? '' : page}`);
  };

  // Service data
  const servicesData = {
    home: {
      title: t('serviceData.home.title'),
      description: t('serviceData.home.description'),
      features: t('serviceData.home.features', { returnObjects: true }) as string[],
      image: 'https://images.unsplash.com/photo-1758272422189-b10f36fd4ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGhvbWUlMjBhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzYyMzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: t('serviceData.home.pricing.smallApartment.name'),
          price: '900 CZK',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.home.pricing.smallApartment.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.home.pricing.mediumApartment.name'),
          price: '1400 CZK',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.home.pricing.mediumApartment.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.home.pricing.largeHouse.name'),
          price: 'From 2000 CZK',
          unit: t('pricing.customPrice'),
          features: t('serviceData.home.pricing.largeHouse.features', { returnObjects: true }) as string[]
        }
      ]
    },
    office: {
      title: t('serviceData.office.title'),
      description: t('serviceData.office.description'),
      features: t('serviceData.office.features', { returnObjects: true }) as string[],
      image: 'https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHRlYW0lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMjEyMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: t('serviceData.office.pricing.smallOffices.name'),
          price: '30 CZK/m²',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.office.pricing.smallOffices.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.office.pricing.mediumOffices.name'),
          price: '25 CZK/m²',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.office.pricing.mediumOffices.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.office.pricing.largeOffices.name'),
          price: 'From 20 CZK/m²',
          unit: t('pricing.customPrice'),
          features: t('serviceData.office.pricing.largeOffices.features', { returnObjects: true }) as string[]
        }
      ]
    },
    airbnb: {
      title: 'Airbnb Cleaning',
      description: 'Fast and thorough cleaning between guests with timing guarantee. We help you maintain high ratings for your Airbnb.',
      features: [
        'Cleaning on check-out day and before check-in',
        'Changing bed linens and towels',
        'Checking functionality of all equipment',
        'Restocking basic hygiene supplies',
        'Photo documentation for your review',
        'Reporting any issues',
        'Flexible availability 7 days a week',
        'Special prices for regular cleanings'
      ],
      image: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: t('serviceData.airbnb.pricing.oneBedroom.name'),
          price: '800 CZK',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.airbnb.pricing.oneBedroom.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.airbnb.pricing.twoThreeBedroom.name'),
          price: '1200 CZK',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.airbnb.pricing.twoThreeBedroom.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.airbnb.pricing.largeApartments.name'),
          price: 'From 1500 CZK',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.airbnb.pricing.largeApartments.features', { returnObjects: true }) as string[]
        }
      ]
    },
    furniture: {
      title: t('serviceData.furniture.title'),
      description: t('serviceData.furniture.description'),
      features: t('serviceData.furniture.features', { returnObjects: true }) as string[],
      image: 'https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMHNvZmF8ZW58MXx8fHwxNzYxMTQ0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: t('serviceData.furniture.pricing.sofaCleaning.name'),
          price: 'From 800 CZK',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.furniture.pricing.sofaCleaning.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.furniture.pricing.carpetCleaning.name'),
          price: '120 CZK/m²',
          unit: t('pricing.perSquareMeter'),
          features: t('serviceData.furniture.pricing.carpetCleaning.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.furniture.pricing.protectionTreatment.name'),
          price: 'From 400 CZK',
          unit: t('pricing.perCleaning'),
          features: t('serviceData.furniture.pricing.protectionTreatment.features', { returnObjects: true }) as string[]
        }
      ]
    },
    renovation: {
      title: t('serviceData.renovation.title'),
      description: t('serviceData.renovation.description'),
      features: t('serviceData.renovation.features', { returnObjects: true }) as string[],
      image: 'https://images.unsplash.com/photo-1661746785480-439c1a4b8254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjExNDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: t('serviceData.renovation.pricing.roughCleaning.name'),
          price: '25 CZK/m²',
          unit: t('pricing.perSquareMeter'),
          features: t('serviceData.renovation.pricing.roughCleaning.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.renovation.pricing.finalCleaning.name'),
          price: '35 CZK/m²',
          unit: t('pricing.perSquareMeter'),
          features: t('serviceData.renovation.pricing.finalCleaning.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.renovation.pricing.completePackage.name'),
          price: 'Custom',
          unit: t('pricing.customPrice'),
          features: t('serviceData.renovation.pricing.completePackage.features', { returnObjects: true }) as string[]
        }
      ]
    },
    development: {
      title: t('serviceData.development.title'),
      description: t('serviceData.development.description'),
      features: t('serviceData.development.features', { returnObjects: true }) as string[],
      image: 'https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: t('serviceData.development.pricing.smallProjects.name'),
          price: 'From 30 CZK/m²',
          unit: t('pricing.perSquareMeter'),
          features: t('serviceData.development.pricing.smallProjects.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.development.pricing.mediumProjects.name'),
          price: 'From 25 CZK/m²',
          unit: t('pricing.perSquareMeter'),
          features: t('serviceData.development.pricing.mediumProjects.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.development.pricing.largeProjects.name'),
          price: 'Custom',
          unit: t('pricing.onRequest'),
          features: t('serviceData.development.pricing.largeProjects.features', { returnObjects: true }) as string[]
        }
      ]
    },
    buildings: {
      title: t('serviceData.buildings.title'),
      description: t('serviceData.buildings.description'),
      features: t('serviceData.buildings.features', { returnObjects: true }) as string[],
      image: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pricing: [
        {
          name: t('serviceData.buildings.pricing.smallBuilding.name'),
          price: 'From 3000 CZK',
          unit: t('pricing.monthly'),
          features: t('serviceData.buildings.pricing.smallBuilding.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.buildings.pricing.mediumBuilding.name'),
          price: 'From 6000 CZK',
          unit: t('pricing.monthly'),
          features: t('serviceData.buildings.pricing.mediumBuilding.features', { returnObjects: true }) as string[]
        },
        {
          name: t('serviceData.buildings.pricing.largeBuilding.name'),
          price: 'Custom',
          unit: t('pricing.onRequest'),
          features: t('serviceData.buildings.pricing.largeBuilding.features', { returnObjects: true }) as string[]
        }
      ]
    }
  };

  // Homepage component
  const HomePage = () => {
    const { t } = useTranslation();
    return (
      <>
        <Hero onNavigate={handleNavigate} />
        <Partners />
        <Services onNavigate={handleNavigate} />
        <section className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" style={{backgroundColor: 'rgba(255, 168, 38, 0.2)'}}></div>
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-4 sm:mb-6 lg:mb-8 shadow-lg">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#FFA826'}}></div>
                <span className="text-xs sm:text-sm text-white">{t("common.readyToStart")}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white mb-3 sm:mb-4 lg:mb-6">
                {t("common.getFreeQuoteTitle")}
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-green-50 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                {t("common.contactTodayQuote")}
              </p>
              
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-50 text-green-700 shadow-2xl hover:shadow-white/50 hover:scale-105 sm:hover:scale-110 transition-all duration-300 border-0 text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-7"
                onClick={() => handleNavigate('contact')}
              >
                {t("common.freeQuote")}
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
  };

  // Office service page component
  const OfficePage = () => (
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
            whatsIncluded={t('serviceData.office.whatsIncluded', { returnObjects: true }) as string[]}
            faqItems={[
              {
                question: t('serviceData.office.faq.cleanOutsideHours.question'),
                answer: t('serviceData.office.faq.cleanOutsideHours.answer')
              },
              {
                question: t('serviceData.office.faq.recommendedFrequency.question'),
                answer: t('serviceData.office.faq.recommendedFrequency.answer')
              },
              {
                question: t('serviceData.office.faq.ownSupplies.question'),
                answer: t('serviceData.office.faq.ownSupplies.answer')
              },
              {
                question: t('serviceData.office.faq.companyReferences.question'),
                answer: t('serviceData.office.faq.companyReferences.answer')
              },
              {
                question: t('serviceData.office.faq.notSatisfied.question'),
                answer: t('serviceData.office.faq.notSatisfied.answer')
              },
              {
                question: t('serviceData.office.faq.longTermContracts.question'),
                answer: t('serviceData.office.faq.longTermContracts.answer')
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

  // Airbnb service page component
  const AirbnbPage = () => {
    const { t } = useTranslation();
    return (
      <ServicePage
        title={servicesData.airbnb.title}
        description={servicesData.airbnb.description}
        features={servicesData.airbnb.features}
        image={servicesData.airbnb.image}
        pricing={servicesData.airbnb.pricing}
        process={[
          { step: 1, title: t('serviceData.airbnb.process.step1Title'), description: t('serviceData.airbnb.process.step1Desc') },
          { step: 2, title: t('serviceData.airbnb.process.step2Title'), description: t('serviceData.airbnb.process.step2Desc') },
          { step: 3, title: t('serviceData.airbnb.process.step3Title'), description: t('serviceData.airbnb.process.step3Desc') },
          { step: 4, title: t('serviceData.airbnb.process.step4Title'), description: t('serviceData.airbnb.process.step4Desc') }
        ]}
        guarantees={t('serviceData.airbnb.guarantees', { returnObjects: true }) as string[]}
        whatsIncluded={t('serviceData.airbnb.whatsIncluded', { returnObjects: true }) as string[]}
        faqItems={[
          {
            question: t('serviceData.airbnb.faq.cleaningSpeed.question'),
            answer: t('serviceData.airbnb.faq.cleaningSpeed.answer')
          },
          {
            question: t('serviceData.airbnb.faq.provideLinens.question'),
            answer: t('serviceData.airbnb.faq.provideLinens.answer')
          },
          {
            question: t('serviceData.airbnb.faq.excessiveDamage.question'),
            answer: t('serviceData.airbnb.faq.excessiveDamage.answer')
          },
          {
            question: t('serviceData.airbnb.faq.eveningWeekend.question'),
            answer: t('serviceData.airbnb.faq.eveningWeekend.answer')
          },
          {
            question: t('serviceData.airbnb.faq.reportIssues.question'),
            answer: t('serviceData.airbnb.faq.reportIssues.answer')
          },
          {
            question: t('serviceData.airbnb.faq.communication.question'),
            answer: t('serviceData.airbnb.faq.communication.answer')
          }
        ]}
        testimonials={[
          {
            name: t('serviceData.airbnb.testimonials.testimonial1Name'),
            role: t('serviceData.airbnb.testimonials.testimonial1Role'),
            text: t('serviceData.airbnb.testimonials.testimonial1Text'),
            rating: 5
          },
          {
            name: t('serviceData.airbnb.testimonials.testimonial2Name'),
            role: t('serviceData.airbnb.testimonials.testimonial2Role'),
            text: t('serviceData.airbnb.testimonials.testimonial2Text'),
            rating: 5
          },
          {
            name: t('serviceData.airbnb.testimonials.testimonial3Name'),
            role: t('serviceData.airbnb.testimonials.testimonial3Role'),
            text: t('serviceData.airbnb.testimonials.testimonial3Text'),
            rating: 5
          }
        ]}
        galleryImages={[
          { img: 'https://images.unsplash.com/photo-1589803010842-41cdf85bf0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGFwYXJ0bWVudCUyMGFpcmJuYnxlbnwxfHx8fDE3NjIyNTA2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.airbnb.gallery.cleanAirbnb') },
          { img: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.airbnb.gallery.modernSpaces') },
          { img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.airbnb.gallery.readyForGuests') }
        ]}
        onNavigate={handleNavigate}
      />
    );
  };

  // Furniture service page component
  const FurniturePage = () => (
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
            process={t('serviceData.furniture.process', { returnObjects: true }) as Array<{step: number, title: string, description: string}>}
            whatsIncluded={t('serviceData.furniture.whatsIncluded', { returnObjects: true }) as string[]}
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
              { img: 'https://images.unsplash.com/photo-1658501238841-da09649a94f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMGNvdWNofGVufDF8fHx8MTc2MjI1MDY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.furniture.gallery.sofaCleaning') },
              { img: 'https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMHNvZmF8ZW58MXx8fHwxNzYxMTQ0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.furniture.gallery.professionalCare') },
              { img: 'https://images.unsplash.com/photo-1747659362772-3caabc37c579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIyNDk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.furniture.gallery.modernTechnology') }
            ]}
    onNavigate={handleNavigate}
  />
  );

  // Renovation service page component
  const RenovationPage = () => {
    const { t } = useTranslation();
    return (
      <ServicePage
        title={servicesData.renovation.title}
        description={servicesData.renovation.description}
        features={servicesData.renovation.features}
        image={servicesData.renovation.image}
        pricing={servicesData.renovation.pricing}
        stats={[
          { value: '1000+', label: t('serviceData.renovation.stats.projects'), icon: '🏗️' },
          { value: '100%', label: t('serviceData.renovation.stats.deadlineCompliance'), icon: '✅' },
          { value: '50+', label: t('serviceData.renovation.stats.teams'), icon: '👷' },
          { value: 'A+', label: t('serviceData.renovation.stats.references'), icon: '🏆' }
        ]}
        guarantees={t('serviceData.renovation.guarantees', { returnObjects: true }) as string[]}
        whatsIncluded={t('serviceData.renovation.whatsIncluded', { returnObjects: true }) as string[]}
        faqItems={[
          {
            question: t('serviceData.renovation.faq.bestTime.question'),
            answer: t('serviceData.renovation.faq.bestTime.answer')
          },
          {
            question: t('serviceData.renovation.faq.constructionMaterials.question'),
            answer: t('serviceData.renovation.faq.constructionMaterials.answer')
          },
          {
            question: t('serviceData.renovation.faq.cleaningDuration.question'),
            answer: t('serviceData.renovation.faq.cleaningDuration.answer')
          },
          {
            question: t('serviceData.renovation.faq.exteriors.question'),
            answer: t('serviceData.renovation.faq.exteriors.answer')
          },
          {
            question: t('serviceData.renovation.faq.luxuryMaterials.question'),
            answer: t('serviceData.renovation.faq.luxuryMaterials.answer')
          },
          {
            question: t('serviceData.renovation.faq.windowWashingOnly.question'),
            answer: t('serviceData.renovation.faq.windowWashingOnly.answer')
          }
        ]}
        testimonials={[
          {
            name: t('serviceData.renovation.testimonials.testimonial1Name'),
            role: t('serviceData.renovation.testimonials.testimonial1Role'),
            text: t('serviceData.renovation.testimonials.testimonial1Text'),
            rating: 5
          },
          {
            name: t('serviceData.renovation.testimonials.testimonial2Name'),
            role: t('serviceData.renovation.testimonials.testimonial2Role'),
            text: t('serviceData.renovation.testimonials.testimonial2Text'),
            rating: 5
          },
          {
            name: t('serviceData.renovation.testimonials.testimonial3Name'),
            role: t('serviceData.renovation.testimonials.testimonial3Role'),
            text: t('serviceData.renovation.testimonials.testimonial3Text'),
            rating: 5
          }
        ]}
        galleryImages={[
          { img: 'https://images.unsplash.com/photo-1738348157125-339841af31fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjByZW5vdmF0aW9uJTIwZHVzdHxlbnwxfHx8fDE3NjIyNTA2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.renovation.gallery.afterRenovation') },
          { img: 'https://images.unsplash.com/photo-1661746785480-439c1a4b8254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjExNDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.renovation.gallery.constructionCleaning') },
          { img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.renovation.gallery.finalResult') }
        ]}
        onNavigate={handleNavigate}
      />
    );
  };

  // Development service page component
  const DevelopmentPage = () => (
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
            whatsIncluded={t('serviceData.development.whatsIncluded', { returnObjects: true }) as string[]}
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
                text: 'Oceňuji zejména jejich reporting a proaktivní přístup. Vždy včas upozorní na případné problémy.',
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

  // Buildings service page component
  const BuildingsPage = () => {
    const { t } = useTranslation();
    return (
      <ServicePage
        title={servicesData.buildings.title}
        description={servicesData.buildings.description}
        features={servicesData.buildings.features}
        image={servicesData.buildings.image}
        pricing={servicesData.buildings.pricing}
        process={[
          { step: 1, title: t('serviceData.buildings.process.step1Title'), description: t('serviceData.buildings.process.step1Desc') },
          { step: 2, title: t('serviceData.buildings.process.step2Title'), description: t('serviceData.buildings.process.step2Desc') },
          { step: 3, title: t('serviceData.buildings.process.step3Title'), description: t('serviceData.buildings.process.step3Desc') },
          { step: 4, title: t('serviceData.buildings.process.step4Title'), description: t('serviceData.buildings.process.step4Desc') }
        ]}
        stats={[
          { value: '150+', label: t('serviceData.buildings.stats.managedBuildings'), icon: '🏘️' },
          { value: '5000+', label: t('serviceData.buildings.stats.satisfiedResidents'), icon: '👨‍👩‍👧‍👦' },
          { value: '99%', label: t('serviceData.buildings.stats.hoaSatisfaction'), icon: '😊' },
          { value: '8 let', label: t('serviceData.buildings.stats.averageCooperation'), icon: '🤝' }
        ]}
        whatsIncluded={t('serviceData.buildings.whatsIncluded', { returnObjects: true }) as string[]}
        faqItems={[
          {
            question: t('serviceData.buildings.faq.recommendedFrequency.question'),
            answer: t('serviceData.buildings.faq.recommendedFrequency.answer')
          },
          {
            question: t('serviceData.buildings.faq.whatsIncluded.question'),
            answer: t('serviceData.buildings.faq.whatsIncluded.answer')
          },
          {
            question: t('serviceData.buildings.faq.reporting.question'),
            answer: t('serviceData.buildings.faq.reporting.answer')
          },
          {
            question: t('serviceData.buildings.faq.companyChange.question'),
            answer: t('serviceData.buildings.faq.companyChange.answer')
          },
          {
            question: t('serviceData.buildings.faq.weekendCleaning.question'),
            answer: t('serviceData.buildings.faq.weekendCleaning.answer')
          },
          {
            question: t('serviceData.buildings.faq.complaints.question'),
            answer: t('serviceData.buildings.faq.complaints.answer')
          }
        ]}
        testimonials={[
          {
            name: t('serviceData.buildings.testimonials.testimonial1Name'),
            role: t('serviceData.buildings.testimonials.testimonial1Role'),
            text: t('serviceData.buildings.testimonials.testimonial1Text'),
            rating: 5
          },
          {
            name: t('serviceData.buildings.testimonials.testimonial2Name'),
            role: t('serviceData.buildings.testimonials.testimonial2Role'),
            text: t('serviceData.buildings.testimonials.testimonial2Text'),
            rating: 5
          },
          {
            name: t('serviceData.buildings.testimonials.testimonial3Name'),
            role: t('serviceData.buildings.testimonials.testimonial3Role'),
            text: t('serviceData.buildings.testimonials.testimonial3Text'),
            rating: 5
          }
        ]}
        galleryImages={[
          { img: 'https://images.unsplash.com/photo-1630699293333-88b76da1405d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGhhbGx3YXl8ZW58MXx8fHwxNzYyMjUwNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.buildings.gallery.commonAreas') },
          { img: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.buildings.gallery.panelBuildings') },
          { img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: t('serviceData.buildings.gallery.cleanEnvironment') }
        ]}
        onNavigate={handleNavigate}
      />
    );
  };

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header onNavigate={handleNavigate} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services onNavigate={handleNavigate} />} />
          <Route path="/home" element={<HomeCleaningPage onNavigate={handleNavigate} />} />
          <Route path="/office" element={<OfficePage />} />
          <Route path="/airbnb" element={<AirbnbPage />} />
          <Route path="/furniture" element={<FurniturePage />} />
          <Route path="/renovation" element={<RenovationPage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/buildings" element={<BuildingsPage />} />
          <Route path="/pricing" element={<><Pricing onNavigate={handleNavigate} /><Contact /></>} />
          <Route path="/about" element={<><About /><Contact /></>} />
          <Route path="/references" element={<><References /><Contact /></>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingActionButton onNavigate={handleNavigate} />
      <CookieConsent />
    </div>
  );
}
