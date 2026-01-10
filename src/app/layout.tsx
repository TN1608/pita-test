import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import Header from "@/components/fragments/Header";
import { Toaster } from "@/components/ui/sonner";
import { Lora } from "next/font/google";

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
});

export const metadata: Metadata = {
    title: "Sculptique™ | Restore Root Cause",
    description: "Restore your lymphatic system naturally.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={lora.variable}>
            <body className={lora.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster />
                    <Header />
                    <div className={"min-h-screen flex flex-col bg-white"}>
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
