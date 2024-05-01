/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lumiere-a.akamaihd.net',
            port: '',
            pathname: '/v1/images/**',
          },
          {
            protocol: 'https',
            hostname: 'images.moviesanywhere.com',
            port: '',
            pathname: '/movie-hero/**',
          },
        ],
      },
};

export default nextConfig;
