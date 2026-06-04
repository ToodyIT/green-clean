/** Namespaces loaded per route (see getStaticProps on each page). */
/** Header/Footer (footer service links need `services` namespace). */
export const I18N_LAYOUT = ["common", "services"] as const;

export const I18N_HOME_PAGE = ["common", "services", "home", "contact"] as const;

/** About block uses contact.company* keys. */
export const I18N_HOME_SECTIONS = [
  "common",
  "services",
  "home",
  "contact",
] as const;

export const I18N_SERVICES_PAGE = ["common", "services"] as const;

export const I18N_PRICING_PAGE = [
  "common",
  "services",
  "pricing",
  "contact",
  "servicePages",
] as const;

export const I18N_CONTACT_PAGE = ["common", "services", "contact"] as const;

export const I18N_SERVICE_DETAIL = [
  "common",
  "services",
  "servicePages",
] as const;

export const I18N_HOME_CLEANING = [
  "common",
  "services",
  "servicePages",
  "pricing",
  "contact",
] as const;
