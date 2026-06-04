import { useState, useEffect } from "react";
import { useLayoutTranslation } from "../i18n/useAppTranslation";
import { MessageCircle, X } from "lucide-react";

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
  position?: "left" | "right";
}

export function WhatsAppWidget({
  phoneNumber,
  message,
  position = "right",
}: WhatsAppWidgetProps) {
  const { t } = useLayoutTranslation();
  const defaultMessage = message || t("whatsapp.defaultMessage");
  const [isVisible, setIsVisible] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    // Show widget after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide prompt after some time
    if (showPrompt) {
      const timer = setTimeout(() => {
        setShowPrompt(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showPrompt]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  const positionClasses =
    position === "left" ? "left-4 sm:left-6" : "right-4 sm:right-6";

  return (
    <div
      className={`fixed bottom-20 ${positionClasses} z-40 flex flex-col items-end gap-3 animate-fade-in-up`}
    >
      {/* Chat Prompt */}
      {showPrompt && (
        <div className="relative max-w-xs animate-scale-in">
          <div className="bg-white rounded-2xl shadow-2xl p-4 border-2 border-green-200">
            {/* Close button */}
            <button
              onClick={() => setShowPrompt(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              aria-label={t("common.close")}
            >
              <X className="w-3 h-3" />
            </button>

            {/* Avatar */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>

              <div>
                <div className="text-sm text-gray-900 mb-1">
                  <strong>GreenClean Praha</strong>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("whatsapp.haveQuestion")}
                </p>
              </div>
            </div>

            {/* Arrow pointing to button */}
            <div
              className="absolute -bottom-2 w-4 h-4 bg-white border-r-2 border-b-2 border-green-200 transform rotate-45"
              style={{
                [position]: "24px",
              }}
            ></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
        aria-label={t("whatsapp.chatOnWhatsApp")}
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>

        {/* Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform" />

        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg animate-pulse">
          1
        </div>
      </button>
    </div>
  );
}
