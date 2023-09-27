/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['coolsen.ru', 'skillicons.dev'],
  },
};

module.exports = nextConfig;
