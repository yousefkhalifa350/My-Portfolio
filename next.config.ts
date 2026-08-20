import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75],
  },
  // Note (Next.js 16):
  // - `swcMinify` was removed from next.config — SWC minification is always
  //   enabled in production builds, so there is nothing to enable.
  // - `compress: true` (gzip) is the default for `next start` / `next dev`,
  //   so it doesn't need to be set here either.
};

export default nextConfig;