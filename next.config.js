/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    HOST: process.env.HOST,
    DEFAULT_API: process.env.DEFAULT_API,
    DEFAULT_JWT_SECRET: process.env.DEFAULT_JWT_SECRET,
    USER_INFO: process.env.USER_INFO,
    REACT_APP_ACCESS_TOKEN: process.env.REACT_APP_ACCESS_TOKEN,
    ISSERVER: typeof window === 'undefined',
    SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  },
};
module.exports = {
  async rewrites() {
    return [
      {
        source: '/share/:shareId',
        destination: '/share/[shareId]'
      }
    ]
  }
}
module.exports = {
  images: {
    domains: ['localhost'], // Add your domain
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Enable file uploads larger than 1MB (default limit)
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

module.exports = nextConfig
