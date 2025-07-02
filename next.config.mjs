/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
    webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,  // ignore canvas on server side to fix konva import
      };
    }
    return config;
  },
};

export default nextConfig;
