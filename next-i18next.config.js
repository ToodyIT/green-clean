module.exports = {
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'uk', 'ru'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
