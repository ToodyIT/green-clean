import { Card } from './ui/card';
import { Star, Quote, Award, Building2, Hammer, Rocket, Hotel, Briefcase, Home, Heart, ShoppingBag } from 'lucide-react';
import { useScrollAnimation, animations } from '../hooks/useScrollAnimation';

export function References() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  
  const testimonials = [
    {
      name: 'Jan Novák',
      position: 'Ředitel, TechCorp s.r.o.',
      rating: 5,
      text: 'S GreenClean Praha spolupracujeme již 3 roky a jsme naprosto spokojeni. Úklid našich kanceláří probíhá vždy profesionálně a včas. Mohu jen doporučit!',
      initials: 'JN',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Marie Svobodová',
      position: 'Majitelka Airbnb bytů',
      rating: 5,
      text: 'Úklid mezi hosty musí být rychlý a dokonalý. GreenClean Praha to zvládá na výbornou. Díky jejich službám mám skvělá hodnocení od hostů.',
      initials: 'MS',
      gradient: 'from-lime-500 to-green-500'
    },
    {
      name: 'Petr Dvořák',
      position: 'Developer, BuildPro',
      rating: 5,
      text: 'Úklid po rekonstrukci je náročný, ale tým GreenClean to vždy zvládne perfektně. Profesionální přístup a výborná komunikace.',
      initials: 'PD',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      name: 'Eva Horáková',
      position: 'Office Manager, StartupHub',
      rating: 5,
      text: 'Pravidelný úklid našich prostor probíhá bez problémů. Tým je spolehlivý, milý a práce je vždy kvalitně odvedená.',
      initials: 'EH',
      customColor: '#FFA826'
    },
    {
      name: 'Tomáš Procházka',
      position: 'Předseda SVJ',
      rating: 5,
      text: 'Úklid společných prostor našeho domu svěřujeme GreenClean Praha již 2 roky. Všichni obyvatelé jsou spokojeni.',
      initials: 'TP',
      customColor: '#FFB84D'
    },
    {
      name: 'Lenka Krajíčková',
      position: 'Majitelka restaurace',
      rating: 5,
      text: 'V restauraci je hygiena klíčová. GreenClean Praha dodržuje všechny naše požadavky a úklid je vždy na nejvyšší úrovni.',
      initials: 'LK',
      customColor: '#E59518'
    },
  ];

  const clients = [
    'TechCorp s.r.o.',
    'BuildPro Development',
    'StartupHub Prague',
    'Hotel Residence',
    'Office Center Praha',
    'SVJ Pankrác',
    'Medical Center',
    'Shopping Gallery',
  ];

  const clientIcons = [Building2, Hammer, Rocket, Hotel, Briefcase, Home, Heart, ShoppingBag];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" ref={headerAnimation.ref}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 shadow-lg" style={{backgroundImage: 'linear-gradient(to right, #FFE4B5, #FFD9A0)', borderWidth: '1px', borderColor: '#FFA826'}}>
            <Star className="w-5 h-5 fill-current" style={{color: '#E59518'}} />
            <span className="text-sm bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #E59518, #FFA826)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
              Reference
            </span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            Co říkají naši{' '}
            <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #E59518, #FFA826, #CC8A1C)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
              klienti
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Důvěra a spokojenost zákazníků je naší prioritou
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white"
            >
              {/* Gradient glow on hover */}
              <div 
                className={`absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 ${testimonial.gradient ? `bg-gradient-to-r ${testimonial.gradient}` : ''}`}
                style={testimonial.customColor ? {background: `linear-gradient(to right, ${testimonial.customColor}, ${testimonial.customColor}dd)`} : {}}
              ></div>
              
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100 group-hover:text-gray-200 transition-colors" />
              
              <div className="relative">
                {/* Avatar and info */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${testimonial.gradient ? `bg-gradient-to-br ${testimonial.gradient}` : ''}`}
                    style={testimonial.customColor ? {background: `linear-gradient(to bottom right, ${testimonial.customColor}, ${testimonial.customColor}dd)`} : {}}
                  >
                    <span className="text-white text-lg">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{fill: '#FFA826', color: '#FFA826'}} />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </div>

              {/* Decorative corner */}
              <div 
                className={`absolute bottom-0 right-0 w-24 h-24 opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity ${testimonial.gradient ? `bg-gradient-to-br ${testimonial.gradient}` : ''}`}
                style={testimonial.customColor ? {background: `linear-gradient(to bottom right, ${testimonial.customColor}, ${testimonial.customColor}88)`} : {}}
              ></div>
            </Card>
          ))}
        </div>

        {/* Clients */}
        <div className="mb-16 -mx-4 lg:-mx-8">
          {/* Background with gradient */}
          <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-green-200 rounded-full mb-4 shadow-lg">
                  <Star className="w-4 h-4" style={{color: '#FFA826', fill: '#FFA826'}} />
                  <span className="text-sm text-gray-900">Naši klienti</span>
                </div>
                <h3 className="text-4xl text-gray-900">
                  Důvěřují nám
                </h3>
              </div>
              
              {/* Infinite scrolling marquee */}
              <div className="relative overflow-hidden py-6">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-green-50 via-emerald-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-teal-50 via-emerald-50 to-transparent z-10"></div>
                
                {/* Scrolling content */}
                <div className="flex animate-marquee">
                  {/* First set */}
                  {clients.map((client, index) => {
                    const IconComponent = clientIcons[index];
                    return (
                      <div 
                        key={`first-${index}`}
                        className="flex-shrink-0 mx-3 px-10 py-8 bg-white border-2 border-green-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-green-500 hover:scale-110 transition-all duration-300 group min-w-[240px] relative overflow-hidden"
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                        
                        <div className="relative flex items-center justify-center gap-3">
                          <IconComponent className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" style={{color: '#FFA826'}} />
                          <div className="text-gray-800 group-hover:text-green-600 transition-colors whitespace-nowrap text-center">
                            {client}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* Duplicate set for seamless loop */}
                  {clients.map((client, index) => {
                    const IconComponent = clientIcons[index];
                    return (
                      <div 
                        key={`second-${index}`}
                        className="flex-shrink-0 mx-3 px-10 py-8 bg-white border-2 border-green-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-green-500 hover:scale-110 transition-all duration-300 group min-w-[240px] relative overflow-hidden"
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                        
                        <div className="relative flex items-center justify-center gap-3">
                          <IconComponent className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" style={{color: '#FFA826'}} />
                          <div className="text-gray-800 group-hover:text-green-600 transition-colors whitespace-nowrap text-center">
                            {client}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative p-12 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 border-0 text-white shadow-2xl overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative text-center">
              <Award className="w-20 h-20 mx-auto mb-6 animate-float" style={{color: '#FFB84D'}} />
              <div className="text-6xl mb-4">98%</div>
              <div className="text-3xl mb-6">Spokojenost zákazníků</div>
              <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto">
                Naší prioritou je vaše spokojenost. Proto se neustále snažíme zlepšovat naše služby 
                a přizpůsobovat se vašim potřebám.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}