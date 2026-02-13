/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    // Add domains if you'll use external images
    domains: [],
  },
}

module.exports = nextConfig
