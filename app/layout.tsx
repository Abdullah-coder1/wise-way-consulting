import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Wise Way Consulting | Capital Raising Advisory",
    description: "Secure investor funding with bespoke business plans, pitch decks, and financial models.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ... existing imports

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
                inter.variable
            )}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
