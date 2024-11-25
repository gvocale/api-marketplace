import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products/transfer-funds",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
