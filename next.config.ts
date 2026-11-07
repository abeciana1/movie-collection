import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  cacheLife: {
    default: {
      stale: 300, // 5 minutes
      revalidate: 3600, // 1 hour
      expire: 86400, // 1 day
    }
  }
};

export default nextConfig;
