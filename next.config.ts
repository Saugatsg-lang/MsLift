/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        "@": "./"  // maps '@' to project root
      }
    }
  }
};

module.exports = nextConfig;
