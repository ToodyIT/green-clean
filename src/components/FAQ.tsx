import React from "react";
import Link from "next/link";
import { useHomeSectionsTranslation } from "../i18n/useAppTranslation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle, Sparkles, Mail } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_FORM_PATH,
  CONTACT_MAILTO,
} from "../constants/contact";
import { SectionBackground } from "./SectionBackground";

export function FAQ() {
  const { t } = useHomeSectionsTranslation();
  const faqs = [
    {
      question: t("faq.howToOrder"),
      answer: t("faq.howToOrderAnswer"),
    },
    {
      question: t("faq.serviceScope"),
      answer: t("faq.serviceScopeAnswer"),
    },
    {
      question: t("faq.priceCalculation"),
      answer: t("faq.priceCalculationAnswer"),
    },
    {
      question: t("faq.ecoProducts"),
      answer: t("faq.ecoProductsAnswer"),
    },
    {
      question: t("faq.needToBePresent"),
      answer: t("faq.needToBePresentAnswer"),
    },
    {
      question: t("faq.regularCleaning"),
      answer: t("faq.regularCleaningAnswer"),
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <SectionBackground variant="lightSm" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-100 to-lime-100 rounded-full mb-4 sm:mb-6 shadow-lg border border-green-200">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            <span className="text-xs sm:text-sm bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
            {t("faq.title")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
            {t("faq.description")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3 sm:space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <AccordionTrigger className="text-left hover:no-underline px-6 py-5 hover:bg-gradient-to-r hover:from-green-50 hover:to-lime-50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-900">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                <div className="pl-12 pt-2">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-green-100 to-lime-100 rounded-3xl border-2 border-green-200">
            <p className="text-gray-700 mb-4">{t("faq.haveMoreQuestions")}</p>
            <a
              href={CONTACT_MAILTO}
              className="text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent hover:from-green-700 hover:to-emerald-700 transition-all block mb-4"
            >
              {CONTACT_EMAIL}
            </a>
            <Link
              href={CONTACT_FORM_PATH}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:from-green-700 hover:to-emerald-700 hover:shadow-xl"
            >
              {t("faq.contactUs")}
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
