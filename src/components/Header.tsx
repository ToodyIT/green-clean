import { useState } from "react";
import { Button } from "./ui/button";
import {
  Menu,
  Sparkles,
  Globe,
  Check,
  Home,
  X,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "figma:asset/ceba5cb5c3fd6bd444b916dd60188eedaad096e0.png";
import { Logo } from "./Logo";

// Header component with improved mobile menu background

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("cs");

  const languages = [
    { code: "cs", name: "Čeština", flag: "🇨🇿" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  const menuItems = [
    { id: "homepage", label: "Hlavní" },
    { id: "services", label: "Služby" },
    { id: "pricing", label: "Ceník" },
    { id: "about", label: "O nás" },
    { id: "references", label: "Reference" },
    { id: "contact", label: "Kontakt" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header */}
        <div className="flex items-center justify-between py-3 sm:py-4">
          <button
            onClick={() => handleNavigation("homepage")}
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={logo}
              alt="GreenClean"
              className="h-12 sm:h-14 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 ${
                  currentPage === item.id
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* Úklid bytů a domů - Featured Service */}
            <Button
              className="bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => handleNavigation("home")}
            >
              <Home className="w-4 h-4 mr-2" />
              Úklid bytů a domů
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 hover:border-green-600 hover:bg-green-50 transition-all gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-lg">
                    {
                      languages.find(
                        (l) => l.code === currentLanguage,
                      )?.flag
                    }
                  </span>
                  <span className="uppercase text-xs">
                    {currentLanguage}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-white/95 backdrop-blur-xl border-2"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() =>
                      setCurrentLanguage(lang.code)
                    }
                    className="cursor-pointer py-3 px-4 hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">
                          {lang.flag}
                        </span>
                        <span className="text-gray-900">
                          {lang.name}
                        </span>
                      </div>
                      {currentLanguage === lang.code && (
                        <Check className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
              onClick={() => handleNavigation("contact")}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Nezávazná poptávka
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className={`
                relative border-2 transition-all duration-300 overflow-hidden
                ${
                  isOpen
                    ? "border-green-600 bg-green-50"
                    : "border-gray-300 hover:border-green-600 hover:bg-green-50"
                }
              `}
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Hamburger Icon */}
              <div className="relative w-5 h-5">
                <span
                  className={`
                    absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out
                    ${isOpen ? "top-1/2 rotate-45 -translate-y-1/2" : "top-1"}
                  `}
                />
                <span
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out
                    ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
                  `}
                />
                <span
                  className={`
                    absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out
                    ${isOpen ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-1"}
                  `}
                />
              </div>
            </Button>
          </div>

          {/* Mobile Slide Menu */}
          <div
            className={`
              fixed top-0 right-0 h-full w-full sm:w-[85vw] max-w-sm 
              bg-white
              shadow-2xl z-50 
              transform transition-all duration-500 ease-out lg:hidden
              border-l-2 border-green-200
              ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            `}
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #ecfdf5 50%, #d1fae5 100%)",
              boxShadow:
                "-10px 0 50px rgba(0,0,0,0.15), -5px 0 25px rgba(76,161,55,0.1)",
            }}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 border-b border-green-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="GreenClean"
                  className="h-10 w-auto"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/80 rounded-full transition-all hover:rotate-90 duration-300"
              >
                <X className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="overflow-y-auto h-[calc(100vh-80px)] px-5 py-6 bg-gradient-to-b from-transparent to-green-50/30">
              {/* Navigation Items */}
              <nav className="flex flex-col gap-2 mb-6">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`
                      px-5 py-4 rounded-2xl transition-all duration-300 text-left
                      transform hover:scale-[1.02] active:scale-[0.98]
                      ${
                        currentPage === item.id
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-md"
                      }
                    `}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen
                        ? "slideInRight 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={
                          currentPage === item.id ? "" : ""
                        }
                      >
                        {item.label}
                      </span>
                      {currentPage === item.id && (
                        <Check className="w-5 h-5 animate-bounce" />
                      )}
                    </div>
                  </button>
                ))}
              </nav>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6"></div>

              {/* Featured Service Button */}
              <div className="mb-6">
                <Button
                  className="w-full bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 hover:from-green-100 hover:to-emerald-100 border-2 border-green-200 shadow-md hover:shadow-lg transition-all py-6 rounded-2xl"
                  onClick={() => handleNavigation("home")}
                >
                  <Home className="w-5 h-5 mr-2" />
                  Úklid bytů a domů
                </Button>
              </div>

              {/* Language Selector */}
              <div className="mb-6">
                <div className="px-2 py-2 mb-3 text-xs uppercase tracking-wider text-gray-500">
                  Vyberte jazyk
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() =>
                        setCurrentLanguage(lang.code)
                      }
                      className={`
                        px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                        transform hover:scale-105 active:scale-95
                        ${
                          currentLanguage === lang.code
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }
                      `}
                    >
                      <span className="text-xl">
                        {lang.flag}
                      </span>
                      <span className="text-xs uppercase tracking-wide">
                        {lang.code}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl border-0 py-6 rounded-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all"
                onClick={() => handleNavigation("contact")}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Nezávazná poptávka
              </Button>

              {/* Bottom Decoration */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-gray-600">
                    Profesionální úklidové služby
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Slide-in animation */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}