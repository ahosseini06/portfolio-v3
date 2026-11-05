import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Import .txt files (e.g. content/blurb.txt) as strings, so edits hot-reload.
      "*.txt": { loaders: ["raw-loader"], as: "*.js" },
    },
  },
};

export default nextConfig;
