import React from "react";
import { useTranslation } from "next-i18next";
import {
  Building2,
  Hotel,
  Home,
  Utensils,
  Store,
  Users,
  Warehouse,
  Briefcase,
} from "lucide-react";

export function Partners() {
  const { t } = useTranslation("common");
  const serviceAreas = [
    {
      name: t("partners.offices"),
      icon: Building2,
      gradient: "from-green-500 to-emerald-500",
    },
    { name: t("partners.hotels"), icon: Hotel, customColor: "#FFB84D" },
    { name: t("partners.airbnb"), icon: Home, customColor: "#FFA826" },
    {
      name: t("partners.restaurants"),
      icon: Utensils,
      gradient: "from-lime-500 to-green-500",
    },
    {
      name: t("partners.stores"),
      icon: Store,
      gradient: "from-teal-500 to-green-500",
    },
    { name: t("partners.hoas"), icon: Users, customColor: "#E59518" },
    {
      name: t("partners.developmentProjects"),
      icon: Warehouse,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: t("partners.apartmentBuildings"),
      icon: Briefcase,
      gradient: "from-green-600 to-lime-600",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div
          className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ backgroundColor: "#FFA826" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0Y2ExMzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white border border-green-200 rounded-full mb-3 sm:mb-4 shadow-lg">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#FFA826" }}
            ></div>
            <span className="text-xs sm:text-sm text-gray-900">
              {t("partners.serviceAreas")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-2 sm:mb-3">
            {t("partners.whereWeOperate")}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg px-4">
            {t("partners.description")}
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6 items-center max-w-7xl mx-auto">
          {serviceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="group relative">
                {/* Glow effect */}
                <div
                  className={`absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                    area.gradient ? `bg-gradient-to-r ${area.gradient}` : ""
                  }`}
                  style={
                    area.customColor
                      ? {
                          background: `linear-gradient(to right, ${area.customColor}, ${area.customColor}dd)`,
                        }
                      : {}
                  }
                ></div>

                {/* Card */}
                <div className="relative flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-white border border-gray-200 rounded-xl sm:rounded-2xl hover:border-green-300 hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 ${
                      area.gradient ? `bg-gradient-to-br ${area.gradient}` : ""
                    }`}
                    style={
                      area.customColor
                        ? {
                            background: `linear-gradient(to bottom right, ${area.customColor}, ${area.customColor}dd)`,
                          }
                        : {}
                    }
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-700 group-hover:text-gray-900 transition-colors text-center leading-tight">
                    {area.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
