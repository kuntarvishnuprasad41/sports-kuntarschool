/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.adaptivewfs.com",
                port: "",
                // pathname: "/image/upload/**",
            },
        ],
    },
};

export default nextConfig;
