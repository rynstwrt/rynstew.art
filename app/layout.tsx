import type { Metadata, Viewport } from "next";
import "@/app/ui/global.css";
import React from "react";
import { contentFont } from "@/app/ui/fonts";
import ParticleBackground from "@/app/ui/components/ParticleBackground";
import Footer from "@/app/ui/components/Footer";
import { ONLY_LANDING_PAGE } from "@/app/lib/constants";


export const metadata: Metadata = {
    title: "rynstew.art",
    applicationName: "rynstew.art",
    description: "Ryn Stewart - Developer and Artist.",
    icons: {
        icon: [
            {
                url: "/icon/favicon/icon0.svg",
                type: "image/svg+xml"
            },
            {
                url: "/icon/favicon/icon1.png",
                sizes: "96x96",
                type: "image/png"
            }
        ],
        apple: "/icon/favicon/apple-icon.png"
    },
};


export const viewport: Viewport = {
    themeColor: "#fe6000"
}


export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={`${contentFont.className} antialiased`}>
        <body>
        <ParticleBackground/>
        {children}
        {!ONLY_LANDING_PAGE && <Footer/>}
        </body>
        </html>
    );
}
