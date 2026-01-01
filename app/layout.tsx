import { Navbar } from "@/components/layout/Navbar";
import FluidCursor from "@/components/ui/FluidCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "danangwepe_",
    description: "AI & Data Science Enthusiast Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(poppins.variable, "font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary")}>
                <SmoothScroll>
                    <FluidCursor />
                    <Navbar />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
