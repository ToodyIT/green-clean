import React from "react";
import { Check } from "lucide-react";

type PricingExtrasTone = "emerald" | "amber";

const CHECK_BG: Record<PricingExtrasTone, string> = {
  emerald: "#4ca137",
  amber: "#FFA826",
};

/**
 * Intro line + checklist with the same round checks as the main Pricing page
 * (white tick on solid circle).
 */
export function PricingIntroThenExtras({
  intro,
  extraHeading,
  items,
  tone = "emerald",
}: {
  intro: string;
  extraHeading: string;
  items: string[];
  tone?: PricingExtrasTone;
}) {
  const accent = CHECK_BG[tone];

  return (
    <div className="space-y-4">
      {/* Neutral intro — readable, без цветного градиентного «бабла» */}
      <p className="text-sm text-gray-600 leading-relaxed pl-1 border-l-[3px] border-gray-200">
        {intro}
      </p>

      <div>
        <p className="text-xs font-medium text-gray-500 mb-3">{extraHeading}</p>
        <div className="space-y-3">
          {items.map((feature, fIndex) => (
            <div key={fIndex} className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                style={{ background: accent }}
              >
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
