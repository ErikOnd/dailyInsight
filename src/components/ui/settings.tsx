import React, { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PersonIcon } from "@radix-ui/react-icons";
import { useUser } from "@auth0/nextjs-auth0/client";

const SettingsDropdown = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { user, isLoading } = useUser();

	useEffect(() => {
		if (user) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [user, isLoading]);

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button variant="link"><PersonIcon className="h-[50px] w-fit" /></Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="animate-slideDownAndFade min-w-[160px] rounded-md bg-white p-2 shadow-md"
					sideOffset={5}>
					{isLoggedIn ?
						<DropdownMenu.Item
							className="hover:bg-mauve-200 cursor-pointer rounded-md px-4 py-2">
							<Link href="/api/auth/logout">
								Logout
							</Link>
						</DropdownMenu.Item> :

						<DropdownMenu.Item
							className="hover:bg-mauve-200 cursor-pointer rounded-md px-4 py-2">
							<Link href="/api/auth/login">
								Login
							</Link>
						</DropdownMenu.Item>
					}

				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default SettingsDropdown;
