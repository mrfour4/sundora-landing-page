import type { NextConfig } from "next";

const UPLOADTHING = `${process.env.UPLOADTHING_HOST!}/f/**`;

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL(UPLOADTHING)],
    },
};

export default nextConfig;
