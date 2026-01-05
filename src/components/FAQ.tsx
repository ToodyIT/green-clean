import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle, Sparkles } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: 'Jak si objednat úklidovou službu?',
      answer: 'Objednání je velmi jednoduché. Můžete nás kontaktovat telefonicky na +420 123 456 789, poslat email na info@greenclean-praha.cz nebo vyplnit kontaktní formulář na našem webu. Do 24 hodin vám odpovíme s cenovou nabídkou.',
    },
    {
      question: 'Jaký je rozsah vašich služeb?',
      answer: 'Nabízíme komplexní úklidové služby včetně úklidu bytů a domů, kanceláří a firem, Airbnb bytů, čištění nábytku, úklidu po rekonstrukci, developerských projektů a panelových domů. Každou službu přizpůsobujeme individuálním potřebám klienta.',
    },
    {
      question: 'Jak se vypočítává cena úklidu?',
      answer: 'Cena se stanovuje na základě velikosti prostoru (m²) a typu služby. Nabízíme transparentní ceník bez skrytých poplatků. Pro přesnou cenu nás kontaktujte s podrobnostmi o vašem prostoru.',
    },
    {
      question: 'Používáte ekologické čisticí prostředky?',
      answer: 'Ano, klademe důraz na ekologii. Používáme certifikované ekologické čisticí prostředky, které jsou šetrné k životnímu prostředí i k vašemu zdraví.',
    },
    {
      question: 'Musím být přítomen během úklidu?',
      answer: 'Není to nutné. Můžete nám poskytnout přístup k prostorám a my provedeme úklid podle dohodnutého plánu. Samozřejmě můžete být přítomni, pokud to preferujete.',
    },
    {
      question: 'Nabízíte pravidelné úklidy?',
      answer: 'Ano, specializujeme se na pravidelné úklidy kanceláří, bytů a dalších prostor. Můžeme nastavit denní, týdenní nebo měsíční harmonogram podle vašich potřeb.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{backgroundColor: '#FFA826'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-lime-100 rounded-full mb-6 shadow-lg border border-green-200">
            <HelpCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
              FAQ
            </span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            Často kladené{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              otázky
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Odpovědi na nejčastější dotazy o našich službách
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
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
                <div className="pl-12 pt-2">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-green-100 to-lime-100 rounded-3xl border-2 border-green-200">
            <p className="text-gray-700 mb-4">
              Máte další otázky? Neváhejte nás kontaktovat!
            </p>
            <a 
              href="mailto:info@greenclean-praha.cz" 
              className="text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent hover:from-green-700 hover:to-emerald-700 transition-all"
            >
              info@greenclean-praha.cz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
