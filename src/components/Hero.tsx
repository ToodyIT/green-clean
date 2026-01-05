import { Button } from './ui/button';
import { CheckCircle, ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" style={{backgroundColor: '#FFB84D'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0Y2ExMzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            {/* Badge with glassmorphism */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-md border border-green-200 rounded-full mb-6 sm:mb-8 shadow-lg hover:bg-white transition-all duration-300 group">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:rotate-12 transition-transform" />
              <span className="text-xs sm:text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Profesionální služby od roku 2010
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight text-gray-900">
              Úklidové služby
              <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                Praha
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed max-w-xl">
              Zajistíme čistotu a pořádek ve vašich prostorách. 
              Spolehlivě, rychle a za{' '}
              <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #FFA826, #E59518)'}}>
                férové ceny
              </span>
              .
            </p>

            {/* Feature Cards with glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {[
                { icon: CheckCircle, title: 'Certifikovaný personál', desc: 'Proškolení profesionálové', gradient: 'from-green-500 to-emerald-600' },
                { icon: Zap, title: 'Ekologické prostředky', desc: 'Šetrné k prostředí', gradient: 'from-lime-500 to-green-600' },
                { icon: Star, title: 'Pojištění odpovědnosti', desc: 'Garantovaná bezpečnost', color: '#FFA826' },
                { icon: Sparkles, title: 'Flexibilní termíny', desc: 'Dle vašich potřeb', color: '#FFB84D' },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl sm:rounded-2xl hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <div 
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform ${item.gradient ? `bg-gradient-to-br ${item.gradient}` : ''}`}
                    style={item.color ? {background: `linear-gradient(to bottom right, ${item.color}, ${item.color}dd)`} : {}}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base text-gray-900 mb-1">{item.title}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 hover:scale-105 transition-all duration-300 border-0"
                onClick={() => onNavigate('contact')}
              >
                Nezávazná poptávka
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-green-600 hover:scale-105 transition-all duration-300"
                onClick={() => onNavigate('services')}
              >
                Naše služby
              </Button>
            </div>
          </div>

          {/* Image with modern effects */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 animate-pulse" style={{backgroundImage: 'linear-gradient(to right, #4ca137, #FFA826)'}}></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0NDYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Profesionální úklidový tým"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>
              
              {/* Floating stats card with glassmorphism */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-2xl hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">500+</div>
                    <div className="text-sm text-gray-600">Spokojených klientů</div>
                  </div>
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  <div className="text-center">
                    <div className="text-4xl bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #FFA826, #E59518)'}}>15+</div>
                    <div className="text-sm text-gray-600">Let zkušeností</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-green-600/50 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
