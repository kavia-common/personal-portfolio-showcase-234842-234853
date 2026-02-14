import type { NextConfig } from "next";

/**
 * Next.js configuration.
 *
 * Notes:
 * - `output: "export"` keeps the app static-export friendly.
 * - `webpack.cache = false` avoids ENOSPC ("no space left on device") failures
 *   in constrained CI environments where persistent caching can exceed disk
 *   quotas. This impacts build speed, not runtime behavior.
 */
const nextConfig: NextConfig = {
  output: "export",
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
