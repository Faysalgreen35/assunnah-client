import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  onDemandEntries: {
    maxInactiveAge: 120 * 1000,
    pagesBufferLength: 5,
  },
  experimental: {
    optimizePackageImports: ["@nextui-org/react", "@reduxjs/toolkit", "react-redux"],
  },
  compress: true,
  poweredByHeader: false,
  turbopack: {
    resolveAlias: {},
  },
};

const withPWAConfig = withPWA({
  dest: "public",
  disable: false,
});

export default withPWAConfig(nextConfig);
