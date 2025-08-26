import type { NextConfig } from "next";

const UPLOADTHING = "https://2xdfpc0xqz.ufs.sh/f/**";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL(UPLOADTHING)],
    },
};

export default nextConfig;
