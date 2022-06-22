/** @type {import('next').NextConfig} */
const {i18n} = require("./next-i18next.config")
const withOffline = require("next-offline")

const nextConfig = {
  images:{
    domains: ['adm-metrobekasi.metro.polri.go.id', 'img.youtube.com', 'i.ytimg.com', 'source.unsplash.com']
  },
  reactStrictMode: false,
  i18n,
  compress:true,
  optimizeFonts:true,
  eslint: {
    ignoreDuringBuilds: true
  },
  trailingSlash: true,
  dontAutoRegisterSw: true
}

module.exports = withOffline(nextConfig)
