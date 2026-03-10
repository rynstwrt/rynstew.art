import type { Metadata } from "next";
import "@/app/ui/global.css";
import React from "react";
import { contentFont } from "@/app/ui/fonts";
import ParticleBackground from "@/app/ui/components/ParticleBackground";
// import Footer from "@/app/components/Footer";


export const metadata: Metadata = {
    title: "rynstew.art",
    description: "Ryn Stewart - Developer and Artist.",
    icons: {
        icon: [
            {url: "/icon/icon-16.png", sizes: "16x16"},
            {url: "/icon/icon-32.png", sizes: "32x32"}
        ],
        apple: "/apple-icon.png"
    }
};


export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={`${contentFont.className} antialiased`}>
        <body>
        <ParticleBackground/>
        {children}
        {/*<Footer />*/}
        </body>
        </html>
    );
}
