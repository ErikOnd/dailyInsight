import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <head>
                <title>DailyInsight</title>
            </head>
            <UserProvider>
                <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                    {children}
                </body>
            </UserProvider>
        </html>
    );
}
