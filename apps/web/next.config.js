/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding', 'dtrace-provider', 'bunyan', 'fs', 'net', 'tls')
    return config
  },
};

module.exports = nextConfig;
