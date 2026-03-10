import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // reactStrictMode: false,
    turbopack:  {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            }
        },
    },
    output: "export",
    basePath: process.env.PAGES_BASE_PATH
};

export default nextConfig;
