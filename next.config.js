/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'upload.wikimedia.org', 
      'images.unsplash.com',
      'links.papareact.com'
    ],
  },
}

module.exports = nextConfig
