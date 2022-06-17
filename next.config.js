/** @type {import('next').NextConfig} */
const {i18n} = require("./next-i18next.config")

const nextConfig = {
  images:{
    domains: ['adm-metrobekasi.metro.polri.go.id', 'img.youtube.com']
  },
  reactStrictMode: false,
  i18n
}

module.exports = nextConfig
