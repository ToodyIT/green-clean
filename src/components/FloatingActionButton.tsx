import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

interface FloatingActionButtonProps {
  onNavigate: (page: string) => void;
}

export function FloatingActionButton({ onNavigate }: FloatingActionButtonProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      icon: Phone,
      label: 'Zavolat',
      href: 'tel:+420123456789',
      gradient: 'from-green-500 to-emerald-600',
      delay: 0.1
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/420123456789',
      gradient: 'from-lime-500 to-green-600',
      delay: 0.15
    },
    {
      icon: Mail,
      label: 'Email',
      onClick: () => {
        navigate('/contact');
        setIsOpen(false);
      },
      customGradient: 'linear-gradient(to bottom right, #FFA826, #E59518)',
      delay: 0.2
    },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <div 
        className={`fixed bottom-24 right-4 sm:right-6 lg:right-8 z-40 transition-all duration-500 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <Button
          size="icon"
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border-2 border-gray-200 text-gray-700 shadow-2xl hover:shadow-green-500/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:border-green-500 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:text-green-600 transition-colors" />
        </Button>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 lg:right-8 z-50 flex flex-col items-end gap-3">
        {/* Action Buttons */}
        {isOpen && (
          <>
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-scale-in"
                  style={{
                    animationDelay: `${action.delay}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Label */}
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-gray-200 whitespace-nowrap text-sm text-gray-800">
                    {action.label}
                  </div>
                  
                  {/* Button */}
                  {action.href ? (
                    <a
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 bg-gradient-to-br ${action.gradient || ''}`}
                      style={action.customGradient ? { backgroundImage: action.customGradient } : {}}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ) : (
                    <button
                      onClick={action.onClick}
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 bg-gradient-to-br ${action.gradient || ''}`}
                      style={action.customGradient ? { backgroundImage: action.customGradient } : {}}
                    >
                      <Icon className="w-6 h-6" />
                    </button>
                  )}
                </div>
              );
            })}
          </>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/60 transition-all duration-300 overflow-hidden group ${
            isOpen ? 'scale-100 rotate-0' : 'scale-100 hover:scale-110'
          }`}
        >
          {/* Animated background pulse */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Ripple effect */}
          <div className={`absolute inset-0 rounded-full bg-green-400 ${isOpen ? 'animate-none' : 'animate-ping'} opacity-75`}></div>
          
          {/* Icon */}
          <div className="relative z-10 transition-transform duration-300">
            {isOpen ? (
              <X className="w-7 h-7 rotate-0 transition-transform" />
            ) : (
              <Phone className="w-7 h-7 transition-transform group-hover:rotate-12" />
            )}
          </div>
        </button>
      </div>

      {/* Overlay when open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden"
        />
      )}
    </>
  );
}
