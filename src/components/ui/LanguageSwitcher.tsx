"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {

	const changeLanguage = (locale: "en" | "de") => {
		document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${365 * 24 * 60 * 60}`;

		const newUrl = window.location.pathname.replace(/\/(en|de)\b/, `/${locale}`);
		window.location.href = newUrl || "/";
	};

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
						className="hover:bg-mauve-200 cursor-pointer rounded-md px-4 py-2"
						onClick={() => changeLanguage("en")}>
						English
					</DropdownMenu.Item>

					<DropdownMenu.Item
						className="hover:bg-mauve-200 cursor-pointer rounded-md px-4 py-2"
						onClick={() => changeLanguage("de")}>
						Deutsch
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default LanguageSwitcher;
