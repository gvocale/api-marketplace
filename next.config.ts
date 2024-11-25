import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products/transfer-funds",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
