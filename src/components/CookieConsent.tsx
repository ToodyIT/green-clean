import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none">
      <div className="container mx-auto max-w-6xl pointer-events-auto">
        <div className="relative bg-white/98 backdrop-blur-2xl border-2 border-gray-200 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden animate-slide-up">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-50"></div>
          
          {/* Animated blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
          
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Cookie className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl text-gray-900 mb-2">
                Používáme cookies 🍪
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Náš web používá cookies pro zlepšení vašeho zážitku z prohlížení. 
                Kliknutím na "Přijmout" souhlasíte s používáním cookies.{' '}
                <a href="#" className="text-green-600 hover:text-green-700 underline">
                  Zjistit více
                </a>
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                onClick={handleAccept}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 whitespace-nowrap"
              >
                Přijmout cookies
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 whitespace-nowrap"
              >
                Odmítnout
              </Button>
            </div>
            
            {/* Close button */}
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:rotate-90"
              aria-label="Zavřít"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
