/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily disable type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig