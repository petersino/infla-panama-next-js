/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["loremflickr.com", "asus.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
