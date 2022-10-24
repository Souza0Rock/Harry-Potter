/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hp-api.herokuapp"],
  }
}

module.exports = nextConfig
