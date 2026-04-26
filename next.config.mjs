/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cityedgedevelopments.com' },
    ],
  },
}
export default nextConfig
