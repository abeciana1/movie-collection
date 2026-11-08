import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Avoid the Next.js 16.4 Turbopack reload loop after a warm restart.
    // https://github.com/vercel/next.js/issues/100267
    turbopackFileSystemCacheForDev: false,
  },
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
