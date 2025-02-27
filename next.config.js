/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC-based minification for faster build
  swcMinify: true,

  // Set a timeout for static page generation
  staticPageGenerationTimeout: 1000,

  // Enable React Strict Mode for better development experience
  reactStrictMode: true,

  // TypeScript Configuration
  typescript: {
    // Allow production builds to succeed even if there are TypeScript errors
    ignoreBuildErrors: true,
  },

  // ESLint Configuration
  eslint: {
    // Allow production builds to succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },

  // Environment Variables
  env: {
    HOST: process.env.HOST,
    DEFAULT_API: process.env.DEFAULT_API,
    DEFAULT_JWT_SECRET: process.env.DEFAULT_JWT_SECRET,
    USER_INFO: process.env.USER_INFO,
    REACT_APP_ACCESS_TOKEN: process.env.REACT_APP_ACCESS_TOKEN,
    ISSERVER: typeof window === 'undefined',  // Check if the code is running server-side
    SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  },

  // Image Configuration
  images: {
    domains: ['localhost'], // Allow images from localhost or specify your domain
  },

  // URL Rewrites
  rewrites() {
    return [
      {
        source: '/share/:shareId',  // Match '/share/:shareId' URL
        destination: '/share/[shareId]',  // Redirect to '/share/[shareId]' page
      },
    ];
  },

  // API Configuration
  api: {
    bodyParser: {
      sizeLimit: '10mb',  // Increase file upload limit to 10MB
    },
  },
};

module.exports = nextConfig;