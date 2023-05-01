/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wattpad.com',
        port: ''
      },
    ],
  },
  reactStrictMode: false,
}
