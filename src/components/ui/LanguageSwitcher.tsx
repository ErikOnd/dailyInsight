"use client";

import React, { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";

const LanguageSwitcher = () => {
	const [currentLanguage, setCurrentLanguage] = useState<"en" | "de" | undefined>(undefined);

	useEffect(() => {
		const locale = document.cookie
			.split("; ")
			.find((row) => row.startsWith("NEXT_LOCALE="))
			?.split("=")[1];

		if (locale === "de" || locale === "en") {
			setCurrentLanguage(locale as "en" | "de");
		}
	}, []);

	const changeLanguage = (locale: "en" | "de") => {
		document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${365 * 24 * 60 * 60}`;

		const newUrl = window.location.pathname.replace(/\/(en|de)\b/, `/${locale}`);
		window.location.href = newUrl || "/";
	};

	const englishClassName = clsx("hover:bg-mauve-200 cursor-pointer rounded-md px-4 py-2", {"text-primary": currentLanguage === "en"});
	const germanClassName = clsx("hover:bg-mauve-200 cursor-pointer rounded-md px-4 py-2", {"text-primary": currentLanguage === "de"});

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button variant="outline">Language</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="animate-slideDownAndFade min-w-[160px] rounded-md bg-white p-2 shadow-md"
					sideOffset={5}>
					<DropdownMenu.Item
						className={englishClassName}
						onClick={() => changeLanguage("en")}>
						English
					</DropdownMenu.Item>

					<DropdownMenu.Item
						className={germanClassName}
						onClick={() => changeLanguage("de")}>
						Deutsch
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default LanguageSwitcher;
