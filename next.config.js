/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    DEFAULT_API: process.env.DEFAULT_API,
    DEFAULT_JWT_SECRET: process.env.DEFAULT_JWT_SECRET,
    REDIRECT_TO: process.env.REDIRECT_TO,
    USER_INFO: process.env.USER_INFO,
    SPEECHLY_APP_ID: process.env.SPEECHLY_APP_ID,
    REACT_APP_ACCESS_TOKEN: process.env.REACT_APP_ACCESS_TOKEN,
    ISSERVER: typeof window === 'undefined',
    SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  },
};
