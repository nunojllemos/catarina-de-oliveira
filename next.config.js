/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
            },
        ],
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig
