import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { CheckCircle, ArrowRight, Check, Shield, Award, Clock, Star, Sparkles, Zap, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  pricing: {
    name: string;
    price: string;
    unit: string;
    features: string[];
  }[];
  accentColor?: string;
  whatsIncluded?: string[];
  faqItems?: {
    question: string;
    answer: string;
  }[];
  testimonials?: {
    name: string;
    role: string;
    text: string;
    rating: number;
  }[];
  galleryImages?: {
    img: string;
    title: string;
  }[];
  stats?: {
    value: string;
    label: string;
    icon: string;
  }[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  guarantees?: string[];
  onNavigate: (page: string) => void;
}

// Process Timeline Component with scroll animation
function ProcessTimelineComponent({ accentColor }: { accentColor: string }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  const steps = [
    { step: '1', title: 'Kontaktujte nás', desc: 'Zavolejte nebo vyplňte formulář' },
    { step: '2', title: 'Cenová nabídka', desc: 'Připravíme nabídku na míru' },
    { step: '3', title: 'Domluvíme termín', desc: 'Přizpůsobíme se vašim potřebám' },
    { step: '4', title: 'Úklid', desc: 'Provedeme kvalitní úklid' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleAmount = Math.max(0, Math.min(1, (windowHeight - rect.top) / (timelineHeight + windowHeight)));
        setLineProgress(visibleAmount * 100);
      }
    };

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setVisibleSteps(prev => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    const stepElements = timelineRef.current?.querySelectorAll('[data-step]');
    stepElements?.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl text-gray-900 mb-4">
          <span style={{ color: accentColor }}>Jak</span> to funguje?
        </h2>
        <p className="text-xl text-gray-600">Jednoduchý proces v několika krocích</p>
      </div>

      <div ref={timelineRef} className="relative">
        {/* Background line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
        
        {/* Animated progress line */}
        <div 
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-green-600 transition-all duration-300 ease-out"
          style={{ 
            height: `${lineProgress}%`,
          }}
        ></div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <div 
              key={index} 
              data-step 
              data-index={index}
              className="relative pl-24 pb-8"
            >
              {/* Step circle/dot with animation */}
              <div 
                className={`absolute left-5 top-0 w-8 h-8 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white transition-all duration-500 ${
                  visibleSteps.has(index) 
                    ? 'scale-100 opacity-100' 
                    : 'scale-0 opacity-0'
                }`}
                style={{
                  backgroundColor: index % 2 === 0 ? accentColor : '#FFA826',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <span className="text-sm">{item.step}</span>
              </div>

              {/* Content card */}
              <Card 
                className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  visibleSteps.has(index) 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 100 + 100}ms`
                }}
              >
                <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicePage({ 
  title, 
  description, 
  features, 
  image, 
  pricing, 
  accentColor = '#4ca137',
  whatsIncluded,
  faqItems,
  testimonials,
  galleryImages,
  stats,
  process,
  guarantees,
  onNavigate 
}: ServicePageProps) {
  // Default values
  const defaultWhatsIncluded = [
    'Kompletní vysávání všech prostor',
    'Mytí a dezinfekce všech povrchů',
    'Čištění oken a rámů',
    'Mytí podlah mokrou cestou',
    'Odstranění prachu z těžko dostupných míst',
    'Čištění sanitárních zařízení',
    'Vyprázdnění a dezinfekce odpadkových košů',
    'Doplnění hygienických potřeb',
    'Kontrola kvality po ukončení práce',
    'Dokumentace provedených prací',
  ];
  
  const defaultFaqItems = [
    {
      question: 'Jak dlouho trvá úklid?',
      answer: 'Doba úklidu závisí na velikosti prostoru a rozsahu prací. Pro standardní prostor do 100 m² počítejte s 2-4 hodinami. Přesný časový odhad vám sdělíme po prohlídce.'
    },
    {
      question: 'Jaké čistící prostředky používáte?',
      answer: 'Používáme výhradně profesionální ekologické prostředky, které jsou šetrné k životnímu prostředí, zdraví a zároveň velmi účinné. Všechny prostředky mají certifikaci EU.'
    },
    {
      question: 'Musím být při úklidu přítomen?',
      answer: 'Není nutné. Většina našich klientů nám svěřuje klíče a my úklid provedeme dle domluvených požadavků. Samozřejmě můžete být přítomni, pokud si to přejete.'
    },
    {
      question: 'Jak probíhá platba?',
      answer: 'Platbu můžete provést hotově, bankovním převodem nebo kartou. Fakturujeme po provedení služby s možností nastavení pravidelných plateb pro opakující se úklidy.'
    },
    {
      question: 'Máte pojištění odpovědnosti?',
      answer: 'Ano, máme profesionální pojištění odpovědnosti za škody do výše 5 mil. Kč. Váš majetek je tak plně chráněn během provádění našich služeb.'
    },
    {
      question: 'Můžu si objednat jednorázový úklid?',
      answer: 'Samozřejmě! Nabízíme jak jednorázové úklidy, tak pravidelné služby. Ceník je flexibilní a přizpůsobujeme se vašim potřebám.'
    }
  ];
  
  const defaultTestimonials = [
    {
      name: 'Petra Nováková',
      role: 'Majitelka Airbnb',
      text: 'Skvělá komunikace a flexibilita. Uklízí mé byty už rok a jsem maximálně spokojená. Hosté hodnotí čistotu 5 hvězdičkami.',
      rating: 5
    },
    {
      name: 'Martin Kovář',
      role: 'Facility Manager',
      text: 'Profesionální přístup a spolehlivost. Starají se o naše kanceláře už 3 roky a nikdy jsme neměli žádný problém.',
      rating: 5
    },
    {
      name: 'Jana Svobodová',
      role: 'Obchodní ředitelka',
      text: 'Konečně úklidová firma, která myslí na detaily. Ekologické prostředky jsou pro nás důležité a oni to dodržují.',
      rating: 5
    }
  ];
  
  const defaultGalleryImages = [
    { 
      img: 'https://images.unsplash.com/photo-1745970347652-8f22f5d7d3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NjIyMzMwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      title: 'Kancelářské prostory' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjIwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      title: 'Profesionální výsledky' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1747659362772-3caabc37c579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIyNDk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      title: 'Špičkové vybavení' 
    }
  ];
  
  const includedItems = whatsIncluded || defaultWhatsIncluded;
  const faq = faqItems || defaultFaqItems;
  const reviews = testimonials || defaultTestimonials;
  const gallery = galleryImages || defaultGalleryImages;
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{backgroundColor: `${accentColor}20`, color: accentColor}}
              >
                <span className="text-sm">Naše služby</span>
              </div>
              <h1 className="text-5xl text-gray-900 mb-6">{title}</h1>
              <p className="text-xl text-gray-600 mb-8">{description}</p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="hover:opacity-90"
                  style={{backgroundColor: accentColor}}
                  onClick={() => {
                    const contactForm = document.getElementById('contact-form');
                    contactForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Nezávazná poptávka
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:border-[#FFA826] hover:text-[#FFA826]"
                  onClick={() => onNavigate('pricing')}
                >
                  Zobrazit kompletní ceník
                </Button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Proč si vybrat právě nás
              </span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">
              Důvody, proč nám <span style={{ color: accentColor }}>věřit</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionální přístup a špičková kvalita v každém detailu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                icon: Shield, 
                title: 'Garance kvality', 
                desc: 'Pojištění odpovědnosti a záruka spokojenosti',
                color: '#4ca137'
              },
              { 
                icon: Award, 
                title: '10+ let zkušeností', 
                desc: 'Stovky spokojených klientů po celé Praze',
                color: '#5cb944'
              },
              { 
                icon: Clock, 
                title: 'Flexibilní termíny', 
                desc: 'Přizpůsobíme se vašemu harmonogramu',
                color: '#f59e0b'
              },
              { 
                icon: Zap, 
                title: 'Ekologické prostředky', 
                desc: 'Šetrné k životnímu prostředí i zdraví',
                color: '#FFA826'
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
                >
                  <div 
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                    style={{background: `linear-gradient(to right, ${item.color}, ${item.color})`}}
                  ></div>
                  
                  <div className="relative">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{background: `linear-gradient(to bottom right, ${item.color}, ${item.color}dd)`}}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Ceny za <span style={{ color: '#FFA826' }}>tuto službu</span>
            </h2>
            <p className="text-xl text-gray-600">Transparentní ceník přizpůsobený vašim potřebám</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {pricing.map((plan, index) => (
              <Card key={index} className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-xl text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl text-green-600 mb-1">{plan.price}</div>
                  <div className="text-sm text-gray-600">{plan.unit}</div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Všechny ceny jsou orientační. Rádi vám připravíme nabídku na míru.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 shadow-lg border"
              style={{
                background: `linear-gradient(to right, ${accentColor}20, ${accentColor}30)`,
                borderColor: `${accentColor}40`
              }}
            >
              <Star className="w-5 h-5" style={{color: accentColor}} />
              <span 
                className="text-sm"
                style={{color: accentColor}}
              >
                Naše práce
              </span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">
              Výsledky našich <span style={{ color: accentColor }}>služeb</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Podívejte se na naše referenční projekty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">
                Co všechno <span style={{ color: '#4ca137' }}>zahrnuje</span> tato služba?
              </h2>
              <p className="text-xl text-gray-600">
                Detailní přehled všech prací, které pro vás provedeme
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {includedItems.map((item, index) => (
                <Card 
                  key={index}
                  className="p-4 border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                      style={{backgroundColor: accentColor}}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - only if stats provided */}
      {stats && (
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => {
                  // Map icons based on index
                  const IconComponent = [CheckCircle, Star, Award, Sparkles][index] || CheckCircle;
                  
                  return (
                    <Card 
                      key={index} 
                      className="relative p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20"
                    >
                      <div className="relative">
                        {/* Icon */}
                        <div className="mb-4 flex justify-center">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        
                        {/* Label */}
                        <div className="text-xl text-white">{stat.label}</div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section - only if process provided */}
      {process && (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl text-gray-900 mb-4">
                  Jak <span style={{ color: '#4ca137' }}>pracujeme</span>
                </h2>
                <p className="text-xl text-gray-600">Náš osvědčený postup krok za krokem</p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200"></div>
                
                <div className="grid md:grid-cols-4 gap-8 relative">
                  {process.map((item, index) => (
                    <div key={index} className="relative">
                      <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-white relative z-10">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4 shadow-lg"
                          style={{backgroundColor: index % 2 === 0 ? '#4ca137' : '#FFA826'}}
                        >
                          {item.step}
                        </div>
                        <h3 className="text-lg text-gray-900 mb-2 text-center">{item.title}</h3>
                        <p className="text-sm text-gray-600 text-center leading-relaxed">{item.description}</p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Guarantees Section - only if guarantees provided */}
      {guarantees && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-gray-900 mb-4">
                  Naše <span style={{ color: '#FFA826' }}>záruky</span>
                </h2>
                <p className="text-xl text-gray-600">Vaše spokojenost je naší prioritou</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {guarantees.map((guarantee, index) => (
                  <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-white to-green-50">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: '#4ca137'}}
                      >
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-700 flex-1">{guarantee}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">
                Časté <span style={{ color: accentColor }}>otázky</span>
              </h2>
              <p className="text-xl text-gray-600">
                Odpovědi na nejčastější dotazy k této službě
              </p>
            </div>

            <Card className="p-6 border-0 shadow-xl">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <Star className="w-5 h-5 text-green-600 fill-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Recenze klientů
              </span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">
              Co říkají naši <span style={{ color: '#4ca137' }}>klienti</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Důvěřují nám stovky spokojených zákazníků
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((testimonial, index) => (
              <Card 
                key={index}
                className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{backgroundColor: '#4ca137'}}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              <span style={{ color: '#4ca137' }}>Jak</span> to funguje?
            </h2>
            <p className="text-xl text-gray-600">Jednoduchý proces v několika krocích</p>
          </div>

          <ProcessTimelineComponent accentColor={accentColor} />
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems && faqItems.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{backgroundColor: '#FFA826'}}></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-4xl relative z-10">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-lime-100 rounded-full mb-6 shadow-lg border border-green-200">
                <Sparkles className="w-5 h-5 text-green-600" />
                <span className="text-sm bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  FAQ
                </span>
              </div>
              <h2 className="text-5xl text-gray-900 mb-6">
                Často kladené{' '}
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  otázky
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Odpovědi na nejčastější dotazy o této službě
              </p>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.slice(0, 6).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <AccordionTrigger className="text-left hover:no-underline px-6 py-5 hover:bg-gradient-to-r hover:from-green-50 hover:to-lime-50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg text-gray-900">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                    <div className="pl-12 pt-2">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-green-100 to-lime-100 rounded-3xl border-2 border-green-200">
                <p className="text-gray-700 mb-4">
                  Máte další otázky? Neváhejte nás kontaktovat!
                </p>
                <a 
                  href="mailto:info@greenclean-praha.cz" 
                  className="text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  info@greenclean-praha.cz
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Kontaktní formulář
              </span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">
              Poptejte si <span style={{ color: accentColor }}>tuto službu</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rádi vám připravíme cenovou nabídku na míru
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="relative p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group">
              {/* Gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative">
                <h3 className="text-3xl text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  Nezávazná poptávka
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <Label className="text-gray-700 mb-3">Píšete jako *</Label>
                    <RadioGroup defaultValue="private" className="flex gap-4 mt-2">
                      <div className="flex items-center space-x-2 flex-1">
                        <RadioGroupItem value="private" id="private-service" className="border-2 border-gray-300" />
                        <Label htmlFor="private-service" className="cursor-pointer text-gray-700">Soukromá osoba</Label>
                      </div>
                      <div className="flex items-center space-x-2 flex-1">
                        <RadioGroupItem value="company" id="company-service" className="border-2 border-gray-300" />
                        <Label htmlFor="company-service" className="cursor-pointer text-gray-700">Firma</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-gray-700">Jméno a příjmení *</Label>
                    <Input 
                      id="name" 
                      placeholder="Jan Novák"
                      className="mt-2 border-2 focus:border-green-500 transition-colors"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700">E-mail *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="jan.novak@email.cz"
                      className="mt-2 border-2 focus:border-green-500 transition-colors"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700">Telefon *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+420 123 456 789"
                      className="mt-2 border-2 focus:border-green-500 transition-colors"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-gray-700">Typ služby</Label>
                    <select 
                      id="service"
                      className="w-full mt-2 px-3 py-2 border-2 border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition-colors"
                    >
                      <option>{title}</option>
                      <option>Úklid bytů a domů</option>
                      <option>Úklid kanceláří a firem</option>
                      <option>Úklid Airbnb bytů</option>
                      <option>Čištění nábytku</option>
                      <option>Úklid po rekonstrukci</option>
                      <option>Developerské projekty</option>
                      <option>Panelové domy a SVJ</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">Zpráva</Label>
                    <Textarea 
                      id="message"
                      placeholder="Popište nám vaše požadavky..."
                      rows={4}
                      className="mt-2 border-2 focus:border-green-500 transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 py-6 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Odeslat poptávku
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Odpovíme vám do 24 hodin
                  </p>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}