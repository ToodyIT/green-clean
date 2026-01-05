import { Card } from './ui/card';
import { Button } from './ui/button';
import { Building2, Home, Sofa, HardHat, Building, Warehouse, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation, animations } from '../hooks/useScrollAnimation';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuredAnimation = useScrollAnimation({ threshold: 0.15 });
  
  const services = [
    {
      id: 'home',
      icon: Home,
      title: 'Úklid bytů a domů',
      description: 'Pravidelný i jednorázový úklid domácností. Profesionální péče o váš domov s důrazem na detail a kvalitu.',
      image: 'https://images.unsplash.com/photo-1758272422189-b10f36fd4ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGhvbWUlMjBhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzYyMzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-emerald-500 via-green-500 to-lime-500',
      featured: true,
      priceFrom: '1 990 Kč',
      priceTo: '8 990 Kč'
    },
    {
      id: 'office',
      icon: Building2,
      title: 'Úklid kanceláří a firem Praha',
      description: 'Pravidelný i jednorázový úklid kancelářských prostor. Zajistíme čisté a příjemné pracovní prostředí.',
      image: 'https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      priceFrom: '25 Kč/m²',
      priceTo: '40 Kč/m²'
    },
    {
      id: 'airbnb',
      icon: Building,
      title: 'Úklid Airbnb bytů',
      description: 'Rychlý a důkladný úklid mezi hosty. Garantujeme termín a vysokou kvalitu pro vaše hodnocení.',
      image: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-lime-500 via-green-500 to-emerald-500',
      priceFrom: '1 500 Kč',
      priceTo: '4 500 Kč'
    },
    {
      id: 'furniture',
      icon: Sofa,
      title: 'Čištění nábytku a sedaček',
      description: 'Profesionální chemické čištění sedacích souprav, koberců a další čalouněné nábytku.',
      image: 'https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMHNvZmF8ZW58MXx8fHwxNzYxMTQ0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      customGradient: 'linear-gradient(to right, #FFA826, #FFB84D, #E59518)',
      priceFrom: '500 Kč',
      priceTo: '3 500 Kč'
    },
    {
      id: 'renovation',
      icon: HardHat,
      title: 'Úklid po rekonstrukci a stavbě',
      description: 'Odstranění stavebního prachu a nečistot. Připravíme prostor k okamžitému užívání.',
      image: 'https://images.unsplash.com/photo-1661746785480-439c1a4b8254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjExNDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      customGradient: 'linear-gradient(to right, #FFB84D, #FFA826, #E59518)',
      priceFrom: '35 Kč/m²',
      priceTo: '60 Kč/m²'
    },
    {
      id: 'development',
      icon: Building,
      title: 'Úklid developerských projektů',
      description: 'Komplexní úklidové služby pro developerské projekty. Zkušenosti s velkými projekty.',
      image: 'https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-teal-500 via-green-500 to-lime-500',
      priceFrom: '30 Kč/m²',
      priceTo: '50 Kč/m²'
    },
    {
      id: 'buildings',
      icon: Warehouse,
      title: 'Úklid panelových domů a SVJ',
      description: 'Pravidelný úklid společných prostor bytových domů. Péče o chodby, schodiště a okolí.',
      image: 'https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      customGradient: 'linear-gradient(to right, #E59518, #FFA826, #CC8A1C)',
      priceFrom: '15 Kč/m²',
      priceTo: '30 Kč/m²'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div ref={headerAnimation.ref} style={animations.fadeInUp(headerAnimation.isVisible)} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Naše služby
            </span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            Komplexní úklidové <br/>
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              řešení pro všechny
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Od kanceláří po bytové domy - zajistíme čistotu ve vašich prostorách
          </p>
        </div>

        {/* Featured Service - Full Width */}
        {services[0] && (() => {
          const service = services[0];
          const Icon = service.icon;
          return (
            <div ref={featuredAnimation.ref} style={animations.scaleIn(featuredAnimation.isVisible, 0.1)}>
              <Card 
                key={service.id} 
                className="group relative overflow-hidden border-2 border-green-200 shadow-2xl hover:shadow-green-500/30 transition-all duration-500 cursor-pointer bg-gradient-to-br from-white to-green-50/30 hover:-translate-y-2 mb-16"
                onClick={() => onNavigate(service.id)}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image with gradient overlay */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div 
                      className={`absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500 ${service.gradient ? `bg-gradient-to-br ${service.gradient}` : ''}`}
                      style={service.customGradient ? {backgroundImage: service.customGradient} : {}}
                    ></div>
                    
                    {/* Icon badge */}
                    <div className="absolute top-6 left-6">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Featured badge */}
                    <div className="absolute top-6 right-6">
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
                        <span className="text-white text-sm">★ Nejpopulárnější</span>
                      </div>
                    </div>

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 animate-shimmer"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 relative flex flex-col justify-center">
                    {/* Gradient line */}
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1 ${service.gradient ? `bg-gradient-to-r ${service.gradient}` : ''}`}
                      style={service.customGradient ? {backgroundImage: service.customGradient} : {}}
                    ></div>
                    
                    <h3 className="text-3xl lg:text-4xl text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price - Minimalist */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2 text-gray-500">
                        <span className="text-sm">od</span>
                        <span className="text-xl text-gray-700">{service.priceFrom}</span>
                        <span className="text-sm">do</span>
                        <span className="text-xl text-gray-700">{service.priceTo}</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center text-green-600 group-hover:text-emerald-600 transition-colors text-lg">
                      <span className="mr-2">Zjistit více</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div 
                  className={`absolute bottom-0 right-0 w-32 h-32 opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity ${service.gradient ? `bg-gradient-to-br ${service.gradient}` : ''}`}
                  style={service.customGradient ? {backgroundImage: service.customGradient} : {}}
                ></div>
              </Card>
            </div>
          );
        })()}

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-slate-50 to-white px-6 py-2 text-sm text-gray-500">
              Další specializované služby
            </span>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(1).map((service, index) => {
            const Icon = service.icon;
            const cardAnimation = useScrollAnimation({ threshold: 0.2 });
            return (
              <div 
                key={service.id}
                ref={cardAnimation.ref} 
                style={animations.fadeInUp(cardAnimation.isVisible, index * 0.1)}
              >
                <Card 
                  className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white hover:-translate-y-2"
                  onClick={() => onNavigate(service.id)}
                >
                  {/* Image with gradient overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div 
                      className={`absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500 ${service.gradient ? `bg-gradient-to-br ${service.gradient}` : ''}`}
                      style={service.customGradient ? {backgroundImage: service.customGradient} : {}}
                    ></div>
                    
                    {/* Icon badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 animate-shimmer"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Gradient line */}
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1 ${service.gradient ? `bg-gradient-to-r ${service.gradient}` : ''}`}
                      style={service.customGradient ? {backgroundImage: service.customGradient} : {}}
                    ></div>
                    
                    <h3 className="text-xl text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price - Minimalist */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1.5 text-gray-500">
                        <span className="text-xs">od</span>
                        <span className="text-base text-gray-700">{service.priceFrom}</span>
                        <span className="text-xs">do</span>
                        <span className="text-base text-gray-700">{service.priceTo}</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center text-green-600 group-hover:text-emerald-600 transition-colors">
                      <span className="mr-2">Zjistit více</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div 
                    className={`absolute bottom-0 right-0 w-24 h-24 opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity ${service.gradient ? `bg-gradient-to-br ${service.gradient}` : ''}`}
                    style={service.customGradient ? {backgroundImage: service.customGradient} : {}}
                  ></div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-105 transition-all duration-300 border-0 text-lg px-8 py-6"
            onClick={() => onNavigate('contact')}
          >
            Nezávazná poptávka
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}