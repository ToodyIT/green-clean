import { TFunction } from "next-i18next";

export function getServiceData(t: TFunction) {
  const servicesData = {
    home: {
      title: t("serviceData.home.title"),
      description: t("serviceData.home.description"),
      features: t("serviceData.home.features", {
        returnObjects: true,
      }) as string[],
      image:
        "https://images.unsplash.com/photo-1758272422189-b10f36fd4ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGhvbWUlMjBhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzYyMzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      pricing: [
        {
          name: t("serviceData.home.pricing.smallApartment.name"),
          price: "900 CZK",
          unit: t("pricing.perCleaning"),
          features: t("serviceData.home.pricing.smallApartment.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.home.pricing.mediumApartment.name"),
          price: "1400 CZK",
          unit: t("pricing.perCleaning"),
          features: t("serviceData.home.pricing.mediumApartment.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.home.pricing.largeHouse.name"),
          price: "From 2000 CZK",
          unit: t("pricing.customPrice"),
          features: t("serviceData.home.pricing.largeHouse.features", {
            returnObjects: true,
          }) as string[],
        },
      ],
    },
    office: {
      title: t("serviceData.office.title"),
      description: t("serviceData.office.description"),
      features: t("serviceData.office.features", {
        returnObjects: true,
      }) as string[],
      image:
        "https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHRlYW0lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMjEyMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      pricing: [
        {
          name: t("serviceData.office.pricing.smallOffices.name"),
          price: "30 CZK/m²",
          unit: t("pricing.perCleaning"),
          features: t("serviceData.office.pricing.smallOffices.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.office.pricing.mediumOffices.name"),
          price: "25 CZK/m²",
          unit: t("pricing.perCleaning"),
          features: t("serviceData.office.pricing.mediumOffices.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.office.pricing.largeOffices.name"),
          price: "From 20 CZK/m²",
          unit: t("pricing.customPrice"),
          features: t("serviceData.office.pricing.largeOffices.features", {
            returnObjects: true,
          }) as string[],
        },
      ],
    },
    airbnb: {
      title: "Airbnb Cleaning",
      description:
        "Fast and thorough cleaning between guests with timing guarantee. We help you maintain high ratings for your Airbnb.",
      features: [
        "Cleaning on check-out day and before check-in",
        "Changing bed linens and towels",
        "Checking functionality of all equipment",
        "Restocking basic hygiene supplies",
        "Photo documentation for your review",
        "Reporting any issues",
        "Flexible availability 7 days a week",
        "Special prices for regular cleanings",
      ],
      image:
        "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      pricing: [
        {
          name: t("serviceData.airbnb.pricing.oneBedroom.name"),
          price: "800 CZK",
          unit: t("pricing.perCleaning"),
          features: t("serviceData.airbnb.pricing.oneBedroom.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.airbnb.pricing.twoThreeBedroom.name"),
          price: "1200 CZK",
          unit: t("pricing.perCleaning"),
          features: t("serviceData.airbnb.pricing.twoThreeBedroom.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.airbnb.pricing.largeApartments.name"),
          price: "From 1500 CZK",
          unit: t("pricing.perCleaning"),
          features: t("serviceData.airbnb.pricing.largeApartments.features", {
            returnObjects: true,
          }) as string[],
        },
      ],
    },
    furniture: {
      title: t("serviceData.furniture.title"),
      description: t("serviceData.furniture.description"),
      features: t("serviceData.furniture.features", {
        returnObjects: true,
      }) as string[],
      image:
        "https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjbGVhbmluZyUyMHNvZmF8ZW58MXx8fHwxNzYxMTQ0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      pricing: [
        {
          name: t("serviceData.furniture.pricing.sofaCleaning.name"),
          price: "From 800 CZK",
          unit: t("pricing.perCleaning"),
          features: t("serviceData.furniture.pricing.sofaCleaning.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.furniture.pricing.carpetCleaning.name"),
          price: "120 CZK/m²",
          unit: t("pricing.perSquareMeter"),
          features: t("serviceData.furniture.pricing.carpetCleaning.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.furniture.pricing.protectionTreatment.name"),
          price: "From 400 CZK",
          unit: t("pricing.perCleaning"),
          features: t(
            "serviceData.furniture.pricing.protectionTreatment.features",
            { returnObjects: true }
          ) as string[],
        },
      ],
    },
    renovation: {
      title: t("serviceData.renovation.title"),
      description: t("serviceData.renovation.description"),
      features: t("serviceData.renovation.features", {
        returnObjects: true,
      }) as string[],
      image:
        "https://images.unsplash.com/photo-1661746785480-439c1a4b8254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjExNDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      pricing: [
        {
          name: t("serviceData.renovation.pricing.roughCleaning.name"),
          price: "25 CZK/m²",
          unit: t("pricing.perSquareMeter"),
          features: t("serviceData.renovation.pricing.roughCleaning.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.renovation.pricing.finalCleaning.name"),
          price: "35 CZK/m²",
          unit: t("pricing.perSquareMeter"),
          features: t("serviceData.renovation.pricing.finalCleaning.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.renovation.pricing.completePackage.name"),
          price: "Custom",
          unit: t("pricing.customPrice"),
          features: t(
            "serviceData.renovation.pricing.completePackage.features",
            { returnObjects: true }
          ) as string[],
        },
      ],
    },
    development: {
      title: t("serviceData.development.title"),
      description: t("serviceData.development.description"),
      features: t("serviceData.development.features", {
        returnObjects: true,
      }) as string[],
      image:
        "https://images.unsplash.com/photo-1631365696563-4990f4e9302c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjExNDQ2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      pricing: [
        {
          name: t("serviceData.development.pricing.smallProjects.name"),
          price: "From 30 CZK/m²",
          unit: t("pricing.perSquareMeter"),
          features: t(
            "serviceData.development.pricing.smallProjects.features",
            { returnObjects: true }
          ) as string[],
        },
        {
          name: t("serviceData.development.pricing.mediumProjects.name"),
          price: "From 25 CZK/m²",
          unit: t("pricing.perSquareMeter"),
          features: t(
            "serviceData.development.pricing.mediumProjects.features",
            { returnObjects: true }
          ) as string[],
        },
        {
          name: t("serviceData.development.pricing.largeProjects.name"),
          price: "Custom",
          unit: t("pricing.onRequest"),
          features: t(
            "serviceData.development.pricing.largeProjects.features",
            { returnObjects: true }
          ) as string[],
        },
      ],
    },
    buildings: {
      title: t("serviceData.buildings.title"),
      description: t("serviceData.buildings.description"),
      features: t("serviceData.buildings.features", {
        returnObjects: true,
      }) as string[],
      image:
        "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NjExNDQ2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      pricing: [
        {
          name: t("serviceData.buildings.pricing.smallBuilding.name"),
          price: "From 3000 CZK",
          unit: t("pricing.monthly"),
          features: t("serviceData.buildings.pricing.smallBuilding.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.buildings.pricing.mediumBuilding.name"),
          price: "From 6000 CZK",
          unit: t("pricing.monthly"),
          features: t("serviceData.buildings.pricing.mediumBuilding.features", {
            returnObjects: true,
          }) as string[],
        },
        {
          name: t("serviceData.buildings.pricing.largeBuilding.name"),
          price: "Custom",
          unit: t("pricing.onRequest"),
          features: t("serviceData.buildings.pricing.largeBuilding.features", {
            returnObjects: true,
          }) as string[],
        },
      ],
    },
  };

  return servicesData;
}

export function useServiceData() {
  // This is a hook wrapper for component usage
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { useTranslation } = require("next-i18next");
  const { t } = useTranslation("common");
  return getServiceData(t);
}
