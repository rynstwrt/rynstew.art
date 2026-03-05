import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
    title: "rynstew.art",
    description: "Ryn Stewart - Developer and Artist.",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16" },
            { url: "/favicon-32x32.png", sizes: "32x32" }
        ],
        apple: "/apple-touch-icon.png"
     }
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}
        </body>
        </html>
    );
}
