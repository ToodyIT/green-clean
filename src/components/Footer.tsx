import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Separator } from './ui/separator';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const navigate = useNavigate();
  const services = [
    { id: 'home', label: 'Úklid bytů a domů' },
    { id: 'office', label: 'Úklid kanceláří a firem' },
    { id: 'airbnb', label: 'Úklid Airbnb bytů' },
    { id: 'furniture', label: 'Čištění nábytku' },
    { id: 'renovation', label: 'Úklid po rekonstrukci' },
    { id: 'development', label: 'Developerské projekty' },
    { id: 'buildings', label: 'Panelové domy a SVJ' },
  ];

  const company = [
    { id: 'about', label: 'O nás' },
    { id: 'references', label: 'Reference' },
    { id: 'pricing', label: 'Ceník' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-gray-300 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-950/20 via-transparent to-orange-950/10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#4ca137 1px, transparent 1px), linear-gradient(to right, #4ca137 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Animated background blobs - multiple layers */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" style={{backgroundColor: 'rgba(255, 168, 38, 0.25)'}}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
      
      {/* Radial gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
      }}></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div>
                <div className="text-xl text-white">
                  <span style={{ color: '#4ca137' }}>Green</span>
                  <span style={{ color: '#FFA826' }}>Clean</span>
                </div>
                <div className="text-sm text-gray-400">Profesionální úklidové služby</div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="relative w-11 h-11 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 transition-all duration-300 group overflow-hidden border border-gray-700/50 hover:border-green-500/50 hover:scale-110 hover:-rotate-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/20 group-hover:to-green-600/20 transition-all"></div>
                <Facebook className="w-5 h-5 relative z-10" />
              </a>
              <a href="#" className="relative w-11 h-11 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 transition-all duration-300 group overflow-hidden border border-gray-700/50 hover:border-green-500/50 hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/20 group-hover:to-green-600/20 transition-all"></div>
                <Instagram className="w-5 h-5 relative z-10" />
              </a>
              <a href="#" className="relative w-11 h-11 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 transition-all duration-300 group overflow-hidden border border-gray-700/50 hover:border-green-500/50 hover:scale-110 hover:rotate-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/20 group-hover:to-green-600/20 transition-all"></div>
                <Linkedin className="w-5 h-5 relative z-10" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 relative inline-block">
              Služby
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => navigate(`/${service.id}`)}
                    className="text-sm hover:text-green-400 transition-all text-left group flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-green-400 group-hover:w-2 transition-all"></span>
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4 relative inline-block">
              Společnost
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigate(`/${item.id}`)}
                    className="text-sm hover:text-green-400 transition-all text-left group flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-green-400 group-hover:w-2 transition-all"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4 relative inline-block">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-9 h-9 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 group-hover:border-green-500/50 transition-all">
                  <Phone className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                </div>
                <a href="tel:+420123456789" className="hover:text-green-400 transition-colors mt-1.5">
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-9 h-9 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 group-hover:border-green-500/50 transition-all">
                  <Mail className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                </div>
                <a href="mailto:info@greenclean-praha.cz" className="hover:text-green-400 transition-colors mt-1.5 break-all">
                  info@greenclean.cz
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-9 h-9 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 group-hover:border-green-500/50 transition-all">
                  <MapPin className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                </div>
                <span className="mt-1.5">
                  Václavské náměstí 123<br />
                  110 00 Praha 1
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="flex items-center gap-1">
            © 2025 ToodyIT
          </p>
          
        </div>
      </div>
    </footer>
  );
}