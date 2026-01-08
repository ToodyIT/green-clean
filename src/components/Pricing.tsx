import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check, ArrowRight, Building2, Home, Sparkles, Crown, Zap, Sofa, HardHat, Building, Warehouse, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { useScrollAnimation, animations } from '../hooks/useScrollAnimation';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export function Pricing({ onNavigate }: PricingProps) {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('home');
  const [homeServiceTab, setHomeServiceTab] = useState('weekly'); // For home service tabs
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  const allServices = [
    {
      id: 'home',
      name: 'Byty a domy',
      icon: Home,
      color: '#4ca137',
      gradient: 'from-emerald-500 via-green-500 to-lime-500',
      hasTabs: true,
      tabs: [
        {
          id: 'weekly',
          name: 'Lehký úklid',
          pricing: [
            {
              name: '1+kk',
              price: '800–1100 Kč',
              unit: '20–40 m²',
              time: '2–3 hodiny',
              features: ['Vysávání a vytírání', 'Čištění koupelny', 'Úklid kuchyně', 'Otírání prachu']
            },
            {
              name: '2+kk / 2+1',
              price: '1200–1700 Kč',
              unit: '45–70 m²',
              time: '4–6 hodin',
              features: ['Více místností', 'Důkladnější čištění', 'Mytí zrcadel', 'Flexibilní termíny']
            },
            {
              name: '3+kk / 3+1',
              price: '1600–2100 Kč',
              unit: '70–100 m²',
              time: '6–8 hodin',
              features: ['Kompletní úklid', 'Péče o rostliny', 'Možnost žehlení', 'Individuální požadavky']
            }
          ]
        },
        {
          id: 'monthly',
          name: 'Generální úklid',
          pricing: [
            {
              name: '1+kk',
              price: '1500–2200 Kč',
              unit: '20–40 m²',
              time: '3–4 hodiny',
              features: ['Mytí všech oken', 'Čištění spotřebičů', 'Čištění skříní', 'Dezinfekce']
            },
            {
              name: '2+kk / 2+1',
              price: '2000–3200 Kč',
              unit: '45–70 m²',
              time: '5–7 hodin',
              features: ['Mytí obkladů', 'Čištění digestoře', 'Leštění podlah', 'Kompletní dezinfekce']
            },
            {
              name: '3+kk / 3+1',
              price: '2500–4000 Kč',
              unit: '70–100 m²',
              time: '7–9 hodin',
              features: ['Hloubkové čištění', 'Čištění nábytku', 'Mytí oken a rámů', 'Premium dezinfekce']
            }
          ]
        },
        {
          id: 'onetime',
          name: 'Úklid po rekonstrukci',
          pricing: [
            {
              name: '1+kk',
              price: '2500–3500 Kč',
              unit: '20–40 m²',
              time: '4–5 hodin',
              features: ['Odstranění prachu', 'Mytí oken', 'Čištění po malířích', 'Finální úklid']
            },
            {
              name: '2+kk / 2+1',
              price: '3500–5500 Kč',
              unit: '45–70 m²',
              time: '6–8 hodin',
              features: ['Hloubkové čištění', 'Čištění obkladů', 'Mytí všech povrchů', 'Kompletní finalizace']
            },
            {
              name: '3+kk / 3+1',
              price: '5000–6500 Kč',
              unit: '70–100 m²',
              time: '8–10 hodin',
              features: ['Kompletní úklid', 'Odstranění nečistot', 'Čištění spotřebičů', 'Premium dokončení']
            }
          ]
        }
      ]
    },
    {
      id: 'office',
      name: 'Kanceláře a firmy',
      icon: Building2,
      color: '#48b349',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
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
          features: ['100-300 m²', 'Kompletní úklid', 'Stálý tým', 'Account manager', 'Sleva 15%'],
          highlighted: true
        },
        {
          name: 'Velké kanceláře',
          price: 'Od 20 Kč/m²',
          unit: 'individuální cena',
          features: ['Nad 300 m²', 'Dedikovaný tým', 'SLA garanty', 'Reporting', '24/7 podpora']
        }
      ]
    },
    {
      id: 'airbnb',
      name: 'Airbnb byty',
      icon: Building,
      color: '#5cb946',
      gradient: 'from-lime-500 via-green-500 to-emerald-500',
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
          features: ['35-70 m²', 'Kompletní úklid', 'Výměna prádla', 'Foto dokumentace'],
          highlighted: true
        },
        {
          name: 'Velké byty',
          price: 'Od 1500 Kč',
          unit: 'za úklid',
          features: ['Nad 70 m²', 'Kompletní úklid', 'Výměna prádla', 'Express možnost']
        }
      ]
    },
    {
      id: 'furniture',
      name: 'Nábytek a sedačky',
      icon: Sofa,
      color: '#48b881',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
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
          features: ['Hloubkové čištění', 'Odstranění skvrn', 'Dezinfekce'],
          highlighted: true
        },
        {
          name: 'Impregnace',
          price: 'Od 400 Kč',
          unit: 'za kus',
          features: ['Ochrana proti skvrnám', 'Prodloužení životnosti', 'Snazší údržba']
        }
      ]
    },
    {
      id: 'renovation',
      name: 'Po rekonstrukci',
      icon: HardHat,
      color: '#FFA826',
      customGradient: 'linear-gradient(to right, #FFA826, #FFB84D, #E59518)',
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
          features: ['Kompletní úklid', 'Leštění povrchů', 'Důkladné mytí oken', 'Připraven k předání'],
          highlighted: true
        },
        {
          name: 'Komplexní balíček',
          price: 'Na míru',
          unit: 'individuální cena',
          features: ['Hrubý + finální', 'Pravidelný úklid během stavby', 'Dedikovaný tým']
        }
      ]
    },
    {
      id: 'development',
      name: 'Developerské projekty',
      icon: Building,
      color: '#FFB84D',
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
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
          features: ['10-50 bytů', 'Dedikovaný tým', 'Koordinace', 'Reporting'],
          highlighted: true
        },
        {
          name: 'Velké projekty',
          price: 'Individuální',
          unit: 'na poptávku',
          features: ['Nad 50 bytů', 'Kompletní správa', 'SLA garanty', '24/7 dostupnost']
        }
      ]
    },
    {
      id: 'buildings',
      name: 'Panelové domy a SVJ',
      icon: Warehouse,
      color: '#6bc14a',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
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
          features: ['12-30 bytů', '3x týdně', 'Kompletní úklid', 'Reporting pro SVJ'],
          highlighted: true
        },
        {
          name: 'Velký dům',
          price: 'Individuální',
          unit: 'na poptávku',
          features: ['Nad 30 bytů', 'Denní úklid', 'Dedikovaný personál', 'Kompletní správa']
        }
      ]
    }
  ];

  const currentService = allServices.find(s => s.id === selectedService) || allServices[0];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 via-green-50 to-slate-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{backgroundColor: '#FFB84D'}}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0Y2ExMzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12" ref={headerAnimation.ref}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-green-200 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-900">Ceník</span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6">
            Transparentní{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ceník
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jasné ceny podle služeb a metrů čtverečních bez skrytých poplatků
          </p>
        </div>

        {/* Services Tabs Bar */}
        <div className="mb-16 max-w-6xl mx-auto">
          {/* Glass morphism container */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-3 shadow-2xl border border-white/50">
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
            </div>

            <div 
              className="relative overflow-x-auto scrollbar-hide scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="flex gap-3 min-w-max px-2">
                {allServices.map((service) => {
                  const Icon = service.icon;
                  const isActive = selectedService === service.id;
                  
                  return (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.id);
                        if (service.id === 'home') {
                          setHomeServiceTab('weekly');
                        }
                      }}
                      className={`
                        relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300
                        ${isActive 
                          ? 'bg-white shadow-xl scale-105 -translate-y-1' 
                          : 'bg-transparent hover:bg-white/50 hover:shadow-lg'
                        }
                      `}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-10"
                          style={{background: service.color}}
                        ></div>
                      )}
                      
                      <div className="relative">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={isActive ? {background: service.color} : {background: '#f3f4f6'}}
                        >
                          <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                      </div>
                      
                      <span className={`whitespace-nowrap transition-colors ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                        {service.name}
                      </span>
                      
                      {/* Bottom indicator line */}
                      {isActive && (
                        <div 
                          className="absolute bottom-0 left-4 right-4 h-1 rounded-full"
                          style={{background: service.color}}
                        ></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dots Navigation Indicator */}
            <div className="flex items-center justify-center gap-2 mt-4 pb-1">
              {allServices.map((service) => {
                const isActive = selectedService === service.id;
                return (
                  <button
                    key={`dot-${service.id}`}
                    onClick={() => setSelectedService(service.id)}
                    className="transition-all duration-300 hover:scale-110"
                    aria-label={`Přejít na ${service.name}`}
                  >
                    <div 
                      className={`rounded-full transition-all duration-300 ${
                        isActive ? 'h-2' : 'h-2'
                      }`}
                      style={{
                        width: isActive ? '24px' : '8px',
                        background: isActive ? service.color : '#d1d5db',
                        opacity: isActive ? 1 : 0.5
                      }}
                    ></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tabs for Home Service */}
        {currentService.hasTabs && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1 shadow-inner">
              {currentService.tabs.map((tab: any) => (
                <button
                  key={tab.id}
                  onClick={() => setHomeServiceTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                    homeServiceTab === tab.id
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16" ref={cardsAnimation.ref}>
          {(currentService.hasTabs 
            ? currentService.tabs.find((t: any) => t.id === homeServiceTab)?.pricing 
            : currentService.pricing
          ).map((plan: any, index: number) => {
            const Icon = currentService.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden border-0 bg-white transition-all duration-500 hover:-translate-y-3 group shadow-xl hover:shadow-2xl"
              >
                {/* Gradient border effect */}
                <div 
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{background: currentService.color}}
                ></div>
                
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className="inline-flex w-16 h-16 rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{background: currentService.color}}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Time badge for home service */}
                  {plan.time && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 w-fit">
                      <Clock className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {plan.time}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl text-gray-900 mb-3">{plan.name}</h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div 
                      className="text-3xl mb-2"
                      style={{color: currentService.color}}
                    >
                      {plan.price}
                    </div>
                    <div className="text-gray-600">{plan.unit}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div 
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                          style={{background: currentService.color}}
                        >
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full text-white transition-all duration-300 hover:scale-105 border-0 hover:shadow-lg mt-auto"
                    style={{background: currentService.color}}
                    onClick={() => navigate(`/${currentService.id}`)}
                  >
                    Zjistit více
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Decorative corner */}
                <div 
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity"
                  style={{background: currentService.color}}
                ></div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="relative p-12 bg-white border-2 border-green-200 rounded-3xl shadow-2xl">
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20" style={{backgroundImage: 'linear-gradient(to right, #4ca137, #FFA826)'}}></div>
            
            <div className="relative">
              <Zap className="w-12 h-12 mx-auto mb-4" style={{color: '#FFA826'}} />
              <p className="text-2xl text-gray-900 mb-6">Potřebujete přesnou cenovou nabídku?</p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-105 transition-all duration-300 border-0"
                onClick={() => navigate('/contact')}
              >
                Nezávazná poptávka
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}