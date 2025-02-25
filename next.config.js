/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
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
  rewrites: async () => {
    return [
      {
        source: '/share/:shareId',
        destination: '/share/[shareId]',
      },
    ];
  },
  images: {
    domains: ['localhost'], // Add your domain
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Increase upload limit
    },
  },
};

module.exports = nextConfig;
