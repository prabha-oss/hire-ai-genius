import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-family",
});

export const metadata: Metadata = {
    title: "Hire AI Genius | Fractional AI Talent Infrastructure",
    description:
        "Compress your AI hiring risk with fractional talent arbitrage. Deploy 99th percentile LLM engineers in 14 days. Scale without the $300K bad-hire burn.",
    keywords: [
        "fractional AI engineer",
        "hire AI talent",
        "AI hiring costs 2025",
        "fractional LLM engineer",
        "MLOps specialist",
        "AI talent shortage",
    ],
    openGraph: {
        title: "Hire AI Genius | Fractional AI Talent Infrastructure",
        description:
            "Deploy 99th percentile LLM engineers in 14 days. 40% cost savings vs full-time hires.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
