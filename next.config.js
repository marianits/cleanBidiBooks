/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wattpad.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'static.cegal.es',
        port: ''
      }
    ],
  },
  reactStrictMode: false,
}
