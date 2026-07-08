import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myportfolio.com",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 2592000, // 30 days — prevents cold re-fetch on every visit
  },
};

export default nextConfig;
