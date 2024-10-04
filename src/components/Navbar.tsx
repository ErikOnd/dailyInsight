"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { clsx } from "clsx";

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);
	const { user, isLoading } = useUser();
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		return localStorage.getItem("isLoggedIn") === "true";
	});

	useEffect(() => {
		if (isLoading) return;

		if (user) {
			setIsLoggedIn(true);
			localStorage.setItem("isLoggedIn", "true");
		} else {
			setIsLoggedIn(false);
			localStorage.setItem("isLoggedIn", "false");
		}
	}, [user, isLoading]);


	const firstSpanClasses = clsx(
		"h-1 w-6 transform rounded-full bg-black transition duration-300",
		{ "translate-y-2.5 rotate-45": isClicked }
	);

	const secondSpanClasses = clsx(
		"h-1 w-6 rounded-full bg-black transition duration-300",
		{ "scale-x-0": isClicked }
	);

	const thirdSpanClasses = clsx(
		"h-1 w-6 transform rounded-full bg-black transition duration-300",
		{ "-translate-y-2.5 -rotate-45": isClicked }
	);

	return (
		<div className="content-holder flex w-full items-center justify-between py-3 sm:py-12">
			<div className="mr-28 text-3xl font-bold">Logo</div>
			<div className="hidden gap-10 font-bold lg:flex">
				<Link href="/home">Home</Link>
				<Link href="/pricing">Pricing</Link>
				<Link href="/aboutUs">About us</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div className="ml-auto hidden gap-5 lg:flex">
				<LanguageSwitcher />
				{isLoggedIn ? (
					<Link href="/api/auth/logout">
						<Button variant="ghost">Logout</Button>
					</Link>
				) : (
					<Link href="/api/auth/login">
						<Button variant="default">Login</Button>
					</Link>
				)}
			</div>
			<div className="block gap-5 lg:hidden">
				<Button
					variant="ghost"
					onClick={() => setIsClicked(!isClicked)}
					className="border border-black"
				>
					<div className="grid justify-items-center gap-1.5">
						<span className={firstSpanClasses} />
						<span className={secondSpanClasses} />
						<span className={thirdSpanClasses} />
					</div>
				</Button>
			</div>
		</div>
	);
};

//todo: humburger komponente auslagern
//todo: navbar vollenden

export default Navbar;
