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
    ],
  },
  reactStrictMode: false,
}
