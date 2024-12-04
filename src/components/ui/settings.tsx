import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

const SettingsDropdown = () => {
	const { user, isLoading } = useUser();
	const router = useRouter();

	const handleNavigation = (url: string) => {
		router.push(url);
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button variant="link">
					<PersonIcon className="h-[50px] w-fit" />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="animate-slideDownAndFade min-w-[160px] rounded-md bg-white p-2 shadow-md"
					sideOffset={5}
				>
					{!isLoading && (
						<DropdownMenu.Item
							className="hover:bg-mauve-200 cursor-pointer rounded-md px-4 py-2"
							onClick={() =>
								handleNavigation(user ? "/api/auth/logout" : "/api/auth/login")
							}
						>
							{user ? "Logout" : "Login"}
						</DropdownMenu.Item>
					)}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default SettingsDropdown;
