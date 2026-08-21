import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContactTranslation } from "../i18n/useAppTranslation";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Phone, Mail, MapPin, Clock, Send, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  CONTACT_EMAIL,
  CONTACT_FORM_ID,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "../constants/contact";
import { scrollToContactForm } from "../utils/navigateToContactForm";

export function Contact() {
  const { t } = useContactTranslation();
  const router = useRouter();
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const formAnimation = useScrollAnimation({ threshold: 0.2 });
  const [, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const scrollIfFormHash = () => {
      if (window.location.hash === `#${CONTACT_FORM_ID}`) {
        requestAnimationFrame(() => scrollToContactForm());
      }
    };

    scrollIfFormHash();
    router.events.on("hashChangeComplete", scrollIfFormHash);
    router.events.on("routeChangeComplete", scrollIfFormHash);
    return () => {
      router.events.off("hashChangeComplete", scrollIfFormHash);
      router.events.off("routeChangeComplete", scrollIfFormHash);
    };
  }, [router.events]);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        style={{ backgroundColor: "#FFA826" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" {...headerAnimation}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg border border-green-200">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {t("contact.title")}
            </span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            {t("contact.subtitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        {/* Separator with text */}
        <div className="flex items-center gap-4 max-w-6xl mx-auto mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
          <span className="text-sm text-gray-500 px-4">
            {t("contact.contactFormInfo")}
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Form */}
          <Card
            id={CONTACT_FORM_ID}
            className="p-8 border-0 shadow-xl bg-white h-full flex flex-col scroll-mt-24"
            {...formAnimation}
          >
            <div className="flex-1 flex flex-col">
              <h3 className="text-3xl text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                {t("contact.freeQuote")}
              </h3>

              <form className="space-y-6 flex-1 flex flex-col">
                <div>
                  <Label className="text-gray-700 mb-3">
                    {t("contact.writingAs")}
                  </Label>
                  <RadioGroup
                    defaultValue="private"
                    className="flex gap-4 mt-2"
                  >
                    <div className="flex items-center space-x-2 flex-1">
                      <RadioGroupItem
                        value="private"
                        id="private"
                        className="border-2 border-gray-300"
                      />
                      <Label
                        htmlFor="private"
                        className="cursor-pointer text-gray-700"
                      >
                        {t("contact.privatePerson")}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 flex-1">
                      <RadioGroupItem
                        value="company"
                        id="company"
                        className="border-2 border-gray-300"
                      />
                      <Label
                        htmlFor="company"
                        className="cursor-pointer text-gray-700"
                      >
                        {t("contact.company")}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    {t("contact.fullName")}
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="mt-2 border-2 focus:border-green-500 transition-colors"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <Label htmlFor="companyName" className="text-gray-700">
                    {t("contact.companyName")}
                  </Label>
                  <Input
                    id="companyName"
                    placeholder=""
                    className="mt-2 border-2 focus:border-green-500 transition-colors"
                    onFocus={() => setFocusedField("companyName")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    {t("contact.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@email.com"
                    className="mt-2 border-2 focus:border-green-500 transition-colors"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    {t("contact.phone")}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={CONTACT_PHONE_DISPLAY}
                    className="mt-2 border-2 focus:border-green-500 transition-colors"
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <Label htmlFor="objectType" className="text-gray-700">
                    {t("contact.objectType")}
                  </Label>
                  <select
                    id="objectType"
                    className="w-full mt-2 px-3 py-2 border-2 border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option>{t("contact.objectTypeApartment")}</option>
                    <option>{t("contact.objectTypeHouse")}</option>
                    <option>{t("contact.objectTypeOffice")}</option>
                    <option>{t("contact.objectTypeCommercial")}</option>
                    <option>{t("contact.objectTypeAirbnb")}</option>
                    <option>{t("contact.objectTypeRenovation")}</option>
                    <option>{t("contact.objectTypeDryCleaning")}</option>
                    <option>{t("contact.objectTypeOther")}</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="urgency" className="text-gray-700">
                    {t("contact.urgencyLabel")}
                  </Label>
                  <select
                    id="urgency"
                    className="w-full mt-2 px-3 py-2 border-2 border-gray-300 rounded-md focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option>{t("contact.urgencyUrgent")}</option>
                    <option>{t("contact.urgencyWeek")}</option>
                    <option>{t("contact.urgencyMonth")}</option>
                    <option>{t("contact.urgencyRegular")}</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t("contact.message")}
                    rows={4}
                    className="mt-2 border-2 focus:border-green-500 transition-colors"
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div className="mt-auto">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 py-6 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t("contact.sendRequest")}
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    {t("contact.responseTime")}
                  </p>
                </div>
              </form>
            </div>
          </Card>

          {/* Contact Info — no flex-1 on cards so long copy (e.g. RU) is not clipped */}
          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-lg group bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg text-gray-900 mb-2">
                    {t("common.phone")}
                  </h4>
                  <a
                    href={CONTACT_PHONE_TEL}
                    className="text-gray-600 hover:text-green-600 transition-colors text-lg"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                  <div className="text-sm text-gray-500 mt-1 space-y-0.5">
                    <p>{t("contact.monFri")}</p>
                    <p>{t("contact.sat")}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg group bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg text-gray-900 mb-2">
                    {t("common.email")}
                  </h4>
                  <a
                    href={CONTACT_MAILTO}
                    className="text-gray-600 hover:text-green-600 transition-colors text-lg"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    {t("contact.weRespond")}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg group bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg text-gray-900 mb-2">
                    {t("common.address")}
                  </h4>
                  <p className="text-gray-600 text-lg whitespace-pre-line">
                    {t("contact.companyAddressDisplay")}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">{t("contact.companyIco")}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t("contact.servicesPrague")}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg group bg-white">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #FFA826, #E59518)",
                  }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg text-gray-900 mb-2 leading-snug">
                    {t("contact.officeSupportHoursTitle")}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {t("contact.monFri")}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {t("contact.sat")}
                  </p>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed break-words">
                    {t("contact.cleaningAnyTimeNote")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
