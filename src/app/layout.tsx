import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                    <Navbar />
                    {children}
                    <hr className="mx-8 mt-48 border-gray-300" />
                    <Footer />
                </body>
            </UserProvider>
        </html>
    );
}

//todo: create a grid layout for the homepage and remove the styling from here
