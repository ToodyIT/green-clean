import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Phone, Mail, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation, animations } from '../hooks/useScrollAnimation';
import { useState } from 'react';

export function Contact() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const ownerAnimation = useScrollAnimation({ threshold: 0.2 });
  const formAnimation = useScrollAnimation({ threshold: 0.2 });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" {...headerAnimation}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Kontakt
            </span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rádi vám připravíme cenovou nabídku na míru
          </p>
        </div>

        {/* Owner Section */}
        <div className="max-w-4xl mx-auto mb-20" {...ownerAnimation}>
          <Card className="relative p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white">
            {/* Gradient glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 group-hover:scale-105 transition-all duration-500">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1604783125462-37d81c7385e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBidXNpbmVzcyUyMG93bmVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyODUxMjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Andrii Mazar - Majitel GreenClean"
                  className="w-full h-full object-cover"
                />
                {/* Green overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-emerald-600/30 group-hover:from-green-600/20 group-hover:to-emerald-600/20 transition-all duration-500"></div>
                
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-3xl border-4 opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{borderColor: '#4ca137'}}></div>
              </div>
              
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 shadow-md">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#4ca137'}}></div>
                  <span className="text-sm" style={{color: '#4ca137'}}>Majitel a jednatel</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl text-gray-900 mb-4">
                  Andrii Mazar
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 italic">
                  "S úklidem máme více než 10 let zkušeností. Naším cílem je poskytovat špičkové služby a budovat dlouhodobé vztahy s našimi klienty. Jsme tu pro vás!"
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a 
                    href="tel:+420123456789"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    +420 123 456 789
                  </a>
                  <a 
                    href="mailto:info@greenclean-praha.cz"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 text-gray-700 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    style={{borderColor: '#4ca137'}}
                  >
                    <Mail className="w-4 h-4" style={{color: '#4ca137'}} />
                    info@greenclean-praha.cz
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Separator with text */}
        <div className="flex items-center gap-4 max-w-6xl mx-auto mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
          <span className="text-sm text-gray-500 px-4">Kontaktní formulář a informace</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="relative p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group" {...formAnimation}>
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
                      <RadioGroupItem value="private" id="private" className="border-2 border-gray-300" />
                      <Label htmlFor="private" className="cursor-pointer text-gray-700">Soukromá osoba</Label>
                    </div>
                    <div className="flex items-center space-x-2 flex-1">
                      <RadioGroupItem value="company" id="company" className="border-2 border-gray-300" />
                      <Label htmlFor="company" className="cursor-pointer text-gray-700">Firma</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="name" className="text-gray-700">Jméno a příjmení *</Label>
                  <Input 
                    id="name" 
                    placeholder="Jan Novák"
                    className="mt-2 border-2 focus:border-green-500 transition-colors"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">E-mail *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="jan.novak@email.cz"
                    className="mt-2 border-2 focus:border-green-500 transition-colors"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">Telefon *</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+420 123 456 789"
                    className="mt-2 border-2 focus:border-green-500 transition-colors"
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-gray-700">Typ služby</Label>
                  <select 
                    id="service"
                    className="w-full mt-2 px-3 py-2 border-2 border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition-colors"
                  >
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
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
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

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Telefon</h4>
                  <a href="tel:+420123456789" className="text-gray-600 hover:text-green-600 transition-colors text-lg">
                    +420 123 456 789
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Po-Pá: 8:00 - 18:00</p>
                </div>
              </div>
            </Card>

            <Card className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 to-green-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">E-mail</h4>
                  <a href="mailto:info@greenclean-praha.cz" className="text-gray-600 hover:text-green-600 transition-colors text-lg">
                    info@greenclean-praha.cz
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Odpovíme do 24 hodin</p>
                </div>
              </div>
            </Card>

            <Card className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-green-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Adresa</h4>
                  <p className="text-gray-600 text-lg">
                    Praha, Česká republika
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Poskytujeme služby v celé Praze</p>
                </div>
              </div>
            </Card>

            <Card className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" style={{backgroundImage: 'linear-gradient(to right, #FFA826, #E59518)'}}></div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{backgroundImage: 'linear-gradient(to bottom right, #FFA826, #E59518)'}}>
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Provozní doba</h4>
                  <p className="text-gray-600">Po-Pá: 8:00 - 18:00</p>
                  <p className="text-gray-600">So: 9:00 - 15:00</p>
                  <p className="text-sm text-gray-500 mt-1">Neděle zavřeno</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}