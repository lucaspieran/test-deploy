/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  images: {
    domains: ['admin.ingenia.la'],
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  i18n,
}

module.exports = nextConfig
