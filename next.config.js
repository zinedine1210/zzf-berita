/** @type {import('next').NextConfig} */
const {i18n} = require("./next-i18next.config")


const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})
const nextConfig = {
  images:{
    domains: ['adm-metrobekasi.metro.polri.go.id', 'img.youtube.com', 'i.ytimg.com', 'source.unsplash.com']
  },
  reactStrictMode: false,
  i18n,
  compress:true,
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = withPlugins([
  [nextConfig],
  [withBundleAnalyzer]
])
