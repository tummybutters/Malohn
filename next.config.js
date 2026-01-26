/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/capital-solutions',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
