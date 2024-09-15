import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "NOX PORTFOLIO",
    description: "My personal portfolio website",
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: 'favicon-light.svg',
                href: 'favicon-light.svg',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: 'favicon-dark.svg',
                href: 'favicon-dark.svg',
            },
        ],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html className="dark" lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}