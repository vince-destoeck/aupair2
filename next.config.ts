/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Split chunks to keep file sizes under the 25MB limit
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 20000,
      maxSize: 20000000, // 20MB to stay safely under the 25MB limit
    };
    return config;
  },
};

export default nextConfig;
