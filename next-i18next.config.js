module.exports = {
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'uk', 'ru'],
    // Default locale (cs) has no URL prefix; without this, refresh can redirect to ru/en from cookie or Accept-Language
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
