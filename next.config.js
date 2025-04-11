/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   NEXTAUTH_URL: 'http://localhost:3000',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.spoonacular.com',
        port: '',
        pathname: '/recipes/**',
      },
    ],
  },
};

module.exports = nextConfig;
