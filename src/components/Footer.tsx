import React from "react";

import { useLayoutTranslation } from "../i18n/useAppTranslation";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { useRouter } from "next/router";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "../constants/contact";
import { navigateToContactForm } from "../utils/navigateToContactForm";
import { SectionBackground } from "./SectionBackground";

export function Footer() {
  const { t } = useLayoutTranslation();
  const router = useRouter();
  const services = [
    { id: "home", label: t("services.homeCleaning") },
    { id: "office", label: t("services.officeCleaning") },
    { id: "airbnb", label: t("services.airbnbCleaning") },
    { id: "furniture", label: t("services.furnitureCleaning") },
    { id: "renovation", label: t("services.renovationCleaning") },
    { id: "development", label: t("services.developmentCleaning") },
    { id: "buildings", label: t("services.buildingCleaning") },
  ];

  const company = [
    { id: "about", label: t("common.about") },
    { id: "references", label: t("common.references") },
    { id: "pricing", label: t("common.pricing") },
    { id: "contact", label: t("common.contact") },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-gray-300 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-950/20 via-transparent to-orange-950/10"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#4ca137 1px, transparent 1px), linear-gradient(to right, #4ca137 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <SectionBackground variant="dark" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div>
                <div className="text-xl text-white">
                  <span style={{ color: "#4ca137" }}>Green</span>
                  <span style={{ color: "#FFA826" }}>Clean</span>
                </div>
                <div className="text-sm text-gray-400">
                  {t("footer.professionalCleaning")}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="relative w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 transition-colors duration-300 group overflow-hidden border border-gray-700/50 hover:border-green-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/20 group-hover:to-green-600/20 transition-all"></div>
                <Facebook className="w-5 h-5 relative z-10" />
              </a>
              <a
                href="#"
                className="relative w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 transition-all duration-300 group overflow-hidden border border-gray-700/50 hover:border-green-500/50 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/20 group-hover:to-green-600/20 transition-all"></div>
                <Instagram className="w-5 h-5 relative z-10" />
              </a>
              <a
                href="#"
                className="relative w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 transition-all duration-300 group overflow-hidden border border-gray-700/50 hover:border-green-500/50 hover:scale-110 hover:rotate-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/20 group-hover:to-green-600/20 transition-all"></div>
                <Linkedin className="w-5 h-5 relative z-10" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 relative inline-block">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => router.push(`/${service.id}`)}
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
              {t("footer.company")}
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      item.id === "contact"
                        ? navigateToContactForm(router)
                        : router.push(`/${item.id}`)
                    }
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
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-9 h-9 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 group-hover:border-green-500/50 transition-all">
                  <Phone className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                </div>
                <a
                  href={CONTACT_PHONE_TEL}
                  className="hover:text-green-400 transition-colors mt-1.5"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-9 h-9 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 group-hover:border-green-500/50 transition-all">
                  <Mail className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                </div>
                <a
                  href={CONTACT_MAILTO}
                  className="hover:text-green-400 transition-colors mt-1.5 break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-9 h-9 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 group-hover:border-green-500/50 transition-all">
                  <MapPin className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                </div>
                <span className="mt-1.5 whitespace-pre-line">
                  {t("contact.companyAddressDisplay")}
                  {"\n"}
                  {t("contact.companyIco")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="flex items-center gap-1">© 2026 ToodyIT</p>
        </div>
      </div>
    </footer>
  );
}
