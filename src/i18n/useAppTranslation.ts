import { useTranslation } from "next-i18next";

/** Single merged `common` namespace (see scripts/merge-locales-to-common.mjs). */
export function useAppTranslation() {
  return useTranslation("common");
}

export const useLayoutTranslation = useAppTranslation;
export const useHomePageTranslation = useAppTranslation;
export const useHomeSectionsTranslation = useAppTranslation;
export const useServicesTranslation = useAppTranslation;
export const usePricingTranslation = useAppTranslation;
export const useContactTranslation = useAppTranslation;
export const useServiceDetailTranslation = useAppTranslation;
export const useHomeCleaningTranslation = useAppTranslation;
