import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<head>
				<title>DailyInsight</title>
			</head>
			<UserProvider>
				<body className={cn("min-h-screen bg-background font-sans", fontSans.variable)}>
					<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
				</body>
			</UserProvider>
		</html>
	);
}
