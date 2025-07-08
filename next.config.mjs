/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
    PRODUCTION_DOMAIN: process.env.PRODUCTION_DOMAIN,
    DEVELOPMENT_DOMAIN: process.env.DEVELOPMENT_DOMAIN,
  },

};

export default nextConfig;
