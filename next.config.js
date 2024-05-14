/** @type {import('next').NextConfig} */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  // async rewrites() {
  //   if (process.env.NODE_ENV === "development") {
  //     return [
  //       {
  //         source: "/:path*",
  //         destination: `${BASE_URL}/:path*`,
  //       },
  //     ];
  //   } else return [];
  // },

  experimental: {
    serverActions: true,
  },

  reactStrictMode: false,
};

module.exports = nextConfig;
