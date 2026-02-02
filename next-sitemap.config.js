/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://greenclean.cz",
  generateRobotsTxt: true,
  i18n: {
    defaultLocale: "cs",
    locales: ["cs", "en", "uk", "ru"],
  },
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
};
