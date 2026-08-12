import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/bio',
        has: [
          {
            type: 'host',
            value: 'flaviofox.com',
          },
        ],
        destination: 'https://bio.flaviofox.com',
        permanent: true,
      },
      {
        source: '/bio',
        has: [
          {
            type: 'host',
            value: 'www.flaviofox.com',
          },
        ],
        destination: 'https://bio.flaviofox.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
