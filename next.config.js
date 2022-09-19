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
