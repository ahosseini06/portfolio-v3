import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

// This machine's LAN addresses, so a phone on the same Wi-Fi can open the dev
// server (e.g. http://192.168.1.235:3000). Dev-only; ignored in production.
const lanAddresses = Object.values(networkInterfaces())
  .flat()
  .filter((a) => a && a.family === "IPv4" && !a.internal)
  .map((a) => a!.address);

const nextConfig: NextConfig = {
  allowedDevOrigins: lanAddresses,
  images: {
    // Defaults plus two wide sizes: the banner photo is sized by height, so
    // on phones and retina screens it renders 5–7k pixels wide.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 5120, 7417],
  },
  turbopack: {
    rules: {
      // Import .txt files (e.g. content/blurb.txt) as strings, so edits hot-reload.
      "*.txt": { loaders: ["raw-loader"], as: "*.js" },
    },
  },
};

export default nextConfig;
