import type { NextConfig } from "next";

// Base path for GitHub Pages project sites (e.g. "/portfolio").
// Set by the deploy workflow; empty for local dev and user/org sites.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
