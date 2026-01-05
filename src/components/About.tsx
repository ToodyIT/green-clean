import { Card } from './ui/card';
import { Award, Users, Shield, Clock, Target, Heart, Sparkles, Zap, TrendingUp, CheckCircle, Calendar, Leaf, Droplets, Wind, Briefcase, Building2, Home, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Logo } from './Logo';
import { useState, useEffect, useRef } from 'react';

// Timeline Section Component with scroll animations
function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleDots, setVisibleDots] = useState<Set<number>>(new Set());

  const milestones = [
    {
      year: '2010',
      title: 'Založení společnosti',
      description: 'Začali jsme jako malý tým 5 lidí s velkými ambicemi poskytovat nejlepší úklidové služby v Praze.',
      position: 'left'
    },
    {
      year: '2013',
      title: 'Rozšíření týmu',
      description: 'Díky rostoucí poptávce jsme rozšířili náš tým na 20 profesionálů a získali první velké korporátní klienty.',
      position: 'right'
    },
    {
      year: '2016',
      title: 'Ekologická iniciativa',
      description: 'Přešli jsme na 100% ekologické čisticí prostředky a získali certifikaci EU Ecolabel.',
      position: 'left'
    },
    {
      year: '2019',
      title: 'Nové technologie',
      description: 'Investovali jsme do moderních úklidových technologií a automatizace procesů pro lepší kvalitu služeb.',
      position: 'right'
    },
    {
      year: '2022',
      title: 'Ocenění kvality',
      description: 'Získali jsme ocenění "Nejlepší úklidová firma roku" a certifikaci ISO 9001.',
      position: 'left'
    },
    {
      year: '2025',
      title: 'Dnes',
      description: 'Tým 50+ profesionálů obsluhujících přes 500 spokojených klientů po celé Praze a okolí.',
      position: 'right'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;

      // Calculate how much of timeline is visible
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - windowHeight;
      
      if (scrollStart < windowHeight && rect.bottom > 0) {
        // Timeline is in view
        const visibleAmount = Math.max(0, Math.min(1, (windowHeight - scrollStart) / (timelineHeight + windowHeight)));
        setLineProgress(visibleAmount * 100);
      }
    };

    // Intersection Observer for dots
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setVisibleDots(prev => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    // Observe all milestone elements
    const milestoneElements = timelineRef.current?.querySelectorAll('[data-milestone]');
    milestoneElements?.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl text-gray-900 mb-4">
          Naše <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">cesta</span>
        </h3>
        <p className="text-lg text-gray-600">Klíčové milníky našeho růstu</p>
      </div>

      <div ref={timelineRef} className="relative max-w-4xl mx-auto">
        {/* Background timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden lg:block"></div>
        
        {/* Animated progress line */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-green-600 hidden lg:block transition-all duration-300 ease-out"
          style={{ 
            height: `${lineProgress}%`,
            top: 0
          }}
        ></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              data-milestone 
              data-index={index}
              className={`relative flex items-center ${milestone.position === 'left' ? 'lg:justify-start' : 'lg:justify-end'}`}
            >
              {/* Timeline dot with animation */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 border-4 border-white shadow-lg z-10 hidden lg:block transition-all duration-500 ${
                  visibleDots.has(index) 
                    ? 'scale-100 opacity-100 animate-pulse' 
                    : 'scale-0 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Pulsing ring effect */}
                {visibleDots.has(index) && (
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                )}
              </div>

              {/* Content card */}
              <Card className={`relative w-full lg:w-5/12 p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group bg-white ${milestone.position === 'left' ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <div className="text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                  </div>
                  <h4 className="text-xl text-gray-900 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Kvalita na prvním místě',
      description: 'Používáme pouze profesionální vybavení a ověřené čisticí prostředky',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Zkušený tým',
      description: 'Náš tým tvoří proškolení profesionálové s letitými zkušenostmi',
      gradient: 'from-lime-500 to-green-500'
    },
    {
      icon: Shield,
      title: 'Pojištění a garance',
      description: 'Máme pojištění odpovědnosti a garantujeme kvalitu našich služeb',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Clock,
      title: 'Spolehlivost',
      description: 'Dodržujeme termíny a jsme flexibilní podle vašich potřeb',
      customColor: '#FFA826'
    },
    {
      icon: Target,
      title: 'Individuální přístup',
      description: 'Každému zákazníkovi věnujeme maximální pozornost',
      customColor: '#FFB84D'
    },
    {
      icon: Heart,
      title: 'Ekologie',
      description: 'Preferujeme ekologické čisticí prostředky šetrné k přírodě',
      customColor: '#E59518'
    },
  ];

  const stats = [
    { 
      value: '500+', 
      label: 'Spokojených klientů', 
      gradient: 'from-green-500 to-emerald-600',
      icon: Users
    },
    { 
      value: '15+', 
      label: 'Let na trhu', 
      customColor: '#FFA826',
      icon: TrendingUp
    },
    { 
      value: '50+', 
      label: 'Členný tým', 
      gradient: 'from-lime-500 to-green-600',
      icon: Zap
    },
    { 
      value: '98%', 
      label: 'Spokojenost klientů', 
      customColor: '#FFB84D',
      icon: Sparkles
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-lime-100 rounded-full mb-6 shadow-lg border border-green-200">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-sm bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
              O nás
            </span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            Proč si vybrat{' '}
            <Logo />
            ?
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Jsme <span className="text-green-600">profesionální úklidová firma</span> s více než 15letou tradicí na českém trhu. 
              Specializujeme se na úklid komerčních i rezidenčních prostor v Praze a okolí.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Naše společnost byla založena s jasnou vizí - poskytovat kvalitní úklidové služby 
              s důrazem na individuální přístup ke každému klientovi. Za dobu našeho působení jsme 
              si vybudovali důvěru <span className="text-green-600">stovek spokojených zákazníků</span>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Důvěřujeme zkušeným profesionálům, kteří jsou pravidelně proškolováni v nejnovějších 
              metodách úklidu. Používáme pouze <span className="text-green-600">certifikované čisticí prostředky</span> a moderní technologie.
            </p>
          </div>

          {/* Image with 3D effect */}
          <div className="relative">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(to right, #4ca137, #FFA826)'}}></div>
              
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0NDYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Náš úklidový tým"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="relative p-8 text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white"
              >
                {/* Gradient background on hover */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${stat.gradient ? `bg-gradient-to-br ${stat.gradient}` : ''}`}
                  style={stat.customColor ? {backgroundColor: stat.customColor} : {}}
                ></div>
                
                {/* Icon */}
                <div className="relative mb-4 flex justify-center">
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${stat.gradient ? `bg-gradient-to-br ${stat.gradient}` : ''}`}
                    style={stat.customColor ? {background: `linear-gradient(to bottom right, ${stat.customColor}, ${stat.customColor}dd)`} : {}}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <div 
                    className={`text-5xl mb-2 bg-clip-text text-transparent ${stat.gradient ? `bg-gradient-to-r ${stat.gradient}` : ''}`}
                    style={stat.customColor ? {backgroundImage: `linear-gradient(to right, ${stat.customColor}, ${stat.customColor}dd)`, WebkitBackgroundClip: 'text', backgroundClip: 'text'} : {}}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl text-gray-900 mb-4">
              Co nás <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">definuje</span>
            </h3>
            <p className="text-lg text-gray-600">Naše hodnoty a přístup k práci</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="relative p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white"
                >
                  {/* Gradient background on hover */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${value.gradient ? `bg-gradient-to-br ${value.gradient}` : ''}`}
                    style={value.customColor ? {backgroundColor: value.customColor} : {}}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${value.gradient ? `bg-gradient-to-br ${value.gradient}` : ''}`}
                      style={value.customColor ? {background: `linear-gradient(to bottom right, ${value.customColor}, ${value.customColor}dd)`} : {}}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div 
                    className={`absolute bottom-0 right-0 w-20 h-20 opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity ${value.gradient ? `bg-gradient-to-br ${value.gradient}` : ''}`}
                    style={value.customColor ? {background: `linear-gradient(to bottom right, ${value.customColor}, ${value.customColor}88)`} : {}}
                  ></div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline - Our Journey */}
        <TimelineSection />

        {/* Our Team Structure */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl text-gray-900 mb-4">
              Náš <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">tým</span>
            </h3>
            <p className="text-lg text-gray-600">Profesionálové, kteří tvoří GreenClean</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Komerční úklidy',
                role: '25 specialistů',
                description: 'Profesionální úklid kanceláří, obchodů a průmyslových prostor',
                icon: Briefcase,
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                name: 'Rezidenční služby',
                role: '15 odborníků',
                description: 'Péče o domácnosti, byty a rodinné domy',
                icon: Home,
                customColor: '#FFA826'
              },
              {
                name: 'Speciální úklidy',
                role: '10 expertů',
                description: 'Výškové práce, havarijní úklidy a dezinfekce',
                icon: Building2,
                gradient: 'from-lime-500 to-green-600'
              },
              {
                name: 'Zákaznická podpora',
                role: '5 konzultantů',
                description: 'Koordinace, plánování a péče o zákazníky',
                icon: Users,
                customColor: '#FFB84D'
              }
            ].map((team, index) => {
              const Icon = team.icon;
              return (
                <Card 
                  key={index}
                  className="relative p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white"
                >
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${team.gradient ? `bg-gradient-to-br ${team.gradient}` : ''}`}
                    style={team.customColor ? {backgroundColor: team.customColor} : {}}
                  ></div>

                  <div className="relative text-center">
                    <div className="mb-4 flex justify-center">
                      <div 
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${team.gradient ? `bg-gradient-to-br ${team.gradient}` : ''}`}
                        style={team.customColor ? {background: `linear-gradient(to bottom right, ${team.customColor}, ${team.customColor}dd)`} : {}}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl text-gray-900 mb-2">{team.name}</h4>
                    <div 
                      className={`text-sm mb-3 ${team.gradient ? `bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent` : ''}`}
                      style={team.customColor ? {color: team.customColor} : {}}
                    >
                      {team.role}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{team.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technology & Equipment */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl text-gray-900 mb-4">
              Naše <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">technologie</span>
            </h3>
            <p className="text-lg text-gray-600">Moderní vybavení pro dokonalé výsledky</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Ekologické prostředky',
                description: 'Certifikované bio čisticí prostředky šetrné k životnímu prostředí i zdraví',
                icon: Leaf,
                features: ['100% biologicky rozložitelné', 'Hypoalergenní složení', 'EU Ecolabel']
              },
              {
                title: 'HEPA filtrace',
                description: 'Profesionální vysavače s HEPA H13 filtrem pro maximální čistotu vzduchu',
                icon: Wind,
                features: ['Zachytí 99.95% částic', 'Ideální pro alergiky', 'Tiché provedení']
              },
              {
                title: 'Parní čistění',
                description: 'Dezinfekce pomocí páry bez použití chemikálií pro hloubkový úklid',
                icon: Droplets,
                features: ['Ekologické čištění', 'Antibakteriální účinek', 'Bezpečné pro děti']
              },
              {
                title: 'Mikrofiber technologie',
                description: 'Profesionální mikrofiber hadříky s vysokou absorpcí a čisticím účinkem',
                icon: Sparkles,
                features: ['10x účinnější než bavlna', 'Žádné škrábance', 'Dlouhá životnost']
              },
              {
                title: 'UV dezinfekce',
                description: 'UV-C germicidní lampy pro efektivní dezinfekci bez chemických prostředků',
                icon: Zap,
                features: ['Ničí 99.9% bakterií', 'Bez reziduí', 'Rychlá aplikace']
              },
              {
                title: 'Profesionální stroje',
                description: 'Průmyslové úklidové stroje pro velké plochy a náročné úkoly',
                icon: Target,
                features: ['Vysoký výkon', 'Ergonomické', 'Pravidelný servis']
              }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card 
                  key={index}
                  className="relative p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group bg-white overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg text-gray-900 mb-2">{tech.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                    
                    <div className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us CTA */}
        <div className="relative">
          <Card className="relative p-12 border-0 shadow-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor: 'rgba(255, 168, 38, 0.2)'}}></div>

            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-sm text-white">Jsme tu pro vás</span>
              </div>

              <h3 className="text-4xl text-white mb-6">
                Připraveni začít spolupráci?
              </h3>
              <p className="text-xl text-green-50 mb-8 leading-relaxed">
                Kontaktujte nás ještě dnes a přesvědčte se sami o kvalitě našich služeb. 
                Nabízíme nezávaznou konzultaci a cenovou nabídku zdarma.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="#kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Získat cenovou nabídku</span>
                  <CheckCircle className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+420123456789"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <span>+420 123 456 789</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}