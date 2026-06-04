import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutTranslation } from "../i18n/useAppTranslation";
import { Button } from "./ui/button";
import { Sparkles, Globe, Check, Home, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "../../public/images/logo.png";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import { CONTACT_FORM_PATH } from "../constants/contact";
import { navigateToContactForm } from "../utils/navigateToContactForm";
import { useMobileMenu } from "../context/MobileMenuContext";

// Header component with improved mobile menu background

const LANGUAGE_DISPLAY_CODES: Record<string, string> = {
  cs: "CZ",
  uk: "UA",
};

const getLanguageDisplayCode = (code: string) =>
  LANGUAGE_DISPLAY_CODES[code] ?? code.toUpperCase();

export function Header() {
  const { t } = useLayoutTranslation();
  const router = useRouter();
  const { isOpen, setIsOpen } = useMobileMenu();
  const [mounted, setMounted] = useState(false);
  const currentLanguage = router.locale || "cs";

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = [
    { code: "cs", name: "Čeština" },
    { code: "en", name: "English" },
    { code: "uk", name: "Українська" },
    { code: "ru", name: "Русский" },
  ];

  const menuItems = [
    { id: "homepage", path: "/", labelKey: "header.home" },
    { id: "services", path: "/services", labelKey: "header.services" },
    { id: "pricing", path: "/pricing", labelKey: "header.pricing" },
    { id: "about", path: "/about", labelKey: "header.about" },
    { id: "references", path: "/references", labelKey: "header.references" },
    { id: "contact", path: CONTACT_FORM_PATH, labelKey: "header.contact" },
  ];

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLanguageChange = (langCode: string) => {
    document.cookie = `NEXT_LOCALE=${langCode};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    router.push(router.asPath, router.asPath, { locale: langCode });
  };

  return (
    <>
      <header
        className={twJoin(
          "sticky top-0 z-50 bg-white border-b border-gray-200/50 shadow-lg",
          !isOpen && "overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main header */}
          <div className="flex items-center justify-between py-3 sm:py-4">
            <Link
              href="/"
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={logo}
                alt="GreenClean"
                className="h-12 sm:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2 shrink-0">
              {menuItems.map((item) => {
                const isActive =
                  item.id === "contact"
                    ? router.pathname === "/contact"
                    : router.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`relative px-2 xl:px-4 py-2 rounded-xl transition-all duration-300 text-base font-semibold whitespace-nowrap ${
                      isActive
                        ? "text-green-700"
                        : "text-gray-800 hover:text-green-700"
                    }`}
                  >
                    {t(item.labelKey)}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0 min-w-0">
              {/* Úklid bytů a domů - Featured Service */}
              <Button
                className="bg-green-50 text-green-800 hover:bg-green-100 border-2 border-green-300 shadow-sm hover:shadow-md transition-all duration-300 text-sm xl:text-base font-semibold px-3 xl:px-4 py-2.5 whitespace-nowrap"
                onClick={() => router.push("/home-cleaning")}
              >
                <Home className="w-4 h-4 xl:w-5 xl:h-5 mr-1.5 xl:mr-2 shrink-0" />
                <span className="truncate max-w-[140px] xl:max-w-none">{t("header.homeCleaning")}</span>
              </Button>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-2 border-gray-300 text-gray-800 font-semibold hover:border-green-600 hover:bg-green-50 hover:text-green-800 transition-all gap-1.5 shrink-0 text-sm px-3 py-2.5"
                  >
                    <Globe className="w-4 h-4 xl:w-5 xl:h-5" />
                    <span className="uppercase text-sm tracking-wide">
                      {getLanguageDisplayCode(currentLanguage)}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white border-2"
                >
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="cursor-pointer py-3 px-4 hover:bg-green-50 transition-colors"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-gray-900">{lang.name}</span>
                        {currentLanguage === lang.code && (
                          <Check className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 text-sm xl:text-base font-semibold px-3 xl:px-5 py-2.5 min-w-0"
                onClick={() => router.push("/pricing")}
              >
                <Sparkles className="w-4 h-4 xl:w-5 xl:h-5 mr-1.5 xl:mr-2 shrink-0" />
                <span className="whitespace-normal text-left leading-tight max-w-[125px] xl:max-w-[180px] 2xl:max-w-none">{t("common.freeQuote")}</span>
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
                      ${
                        isOpen
                          ? "top-1/2 -rotate-45 -translate-y-1/2"
                          : "bottom-1"
                      }
                    `}
                  />
                </div>
              </Button>
            </div>
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

      {mounted &&
        createPortal(
          <>
            <div
              className={twJoin(
                "fixed inset-0 z-50 bg-black/40 transition-opacity duration-500 ease-out lg:hidden",
                isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              )}
              onClick={() => setIsOpen(false)}
              aria-hidden={!isOpen}
            />

            <div
              className={twJoin(
                "fixed top-0 right-0 z-[100] flex w-full max-w-sm flex-col border-l-2 border-green-200 shadow-2xl transition-transform duration-500 ease-out lg:hidden",
                isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
              )}
              style={{
                height: "100dvh",
                minHeight: "100vh",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #ecfdf5 50%, #d1fae5 100%)",
                boxShadow:
                  "-10px 0 50px rgba(0,0,0,0.15), -5px 0 25px rgba(76,161,55,0.1)",
              }}
              role="dialog"
              aria-modal={isOpen}
              aria-hidden={!isOpen}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-green-200 bg-white/95 p-5 shadow-sm">
                <Image src={logo} alt="GreenClean" className="h-10 w-auto" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full transition-all duration-300 hover:rotate-90 hover:bg-white/80"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </Button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6">
                <nav className="mb-6 flex flex-col gap-2">
                  {menuItems.map((item, index) => {
                    const isActive =
                      item.id === "contact"
                        ? router.pathname === "/contact"
                        : router.pathname === item.path;
                    return (
                      <Link
                        key={item.id}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={twJoin(
                          "rounded-2xl px-5 py-4 text-left text-lg font-semibold transition-all duration-300",
                          "transform hover:scale-[1.02] active:scale-[0.98]",
                          isActive
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30"
                            : "text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-md"
                        )}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: isOpen
                            ? "slideInRight 0.3s ease-out forwards"
                            : "none",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{t(item.labelKey)}</span>
                          {isActive && (
                            <Check className="h-5 w-5 animate-bounce" />
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </nav>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                <div className="mb-6">
                  <Button
                    className="w-full rounded-2xl border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 py-6 text-base font-semibold text-green-800 shadow-md transition-all hover:from-green-100 hover:to-emerald-100 hover:shadow-lg"
                    onClick={() => {
                      router.push("/home-cleaning");
                      setIsOpen(false);
                    }}
                  >
                    <Home className="mr-2 h-5 w-5" />
                    {t("header.homeCleaning")}
                  </Button>
                </div>

                <div className="mb-6">
                  <div className="mb-3 px-2 py-2 text-xs uppercase tracking-wider text-gray-500">
                    {t("header.selectLanguage")}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleLanguageChange(lang.code)}
                        className={twJoin(
                          "flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300",
                          "transform hover:scale-105 active:scale-95",
                          currentLanguage === lang.code
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        )}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full rounded-2xl border-0 bg-gradient-to-r from-green-600 to-emerald-600 py-6 text-base font-semibold text-white shadow-xl transition-all hover:from-green-700 hover:to-emerald-700 hover:shadow-2xl active:scale-[0.98]"
                  onClick={() => {
                    navigateToContactForm(router);
                    setIsOpen(false);
                  }}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t("common.freeQuote")}
                </Button>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs text-gray-600">
                      {t("header.professionalCleaning")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
