/** @type {import('next').NextConfig} */
const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  // Enable static exports if needed, or remove for SSR
  // output: 'export',
};

module.exports = nextConfig;
