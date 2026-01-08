import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import CanvasCursor from "@/components/ui/CanvasCursor";
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
        <html lang="en" suppressHydrationWarning>
            <body className={cn(poppins.variable, "font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary")}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <SmoothScroll>
                        <Navbar />
                        {children}
                        <CanvasCursor />
                    </SmoothScroll>
                </ThemeProvider>
            </body>
        </html>
    );
}
