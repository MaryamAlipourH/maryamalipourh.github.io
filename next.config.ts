import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site into `out/` for GitHub Pages.
  output: "export",
  // GitHub Pages has no image server, so serve images as-is.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
