"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { MobileNavButton } from "@/components/ui/MobileNavButton";
import { motion } from "framer-motion";

const Navbar = () => {
	const [showMobileNavigation, setShowMobileNavigation] = useState(false);
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

	const mobileNavVariants = {
		hidden: { height: 0, opacity: 0, y: 0, overflow: "hidden" },
		visible: { height: "auto", opacity: 1, y: 120, overflow: "hidden" },
	};

	return (
		<div className="relative flex w-full flex-col">
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
				<MobileNavButton isClicked={showMobileNavigation} setIsClicked={setShowMobileNavigation} />
			</div>
			<motion.div
				className="content-holder absolute bottom-0 flex w-full flex-col gap-2 bg-red-600"
				variants={mobileNavVariants}
				initial="hidden"
				animate={showMobileNavigation ? "visible" : "hidden"}
				transition={{ duration: 0.3 }}
			>
				<Link href="/home" onClick={() => setShowMobileNavigation(false)}>Home</Link>
				<Link href="/pricing" onClick={() => setShowMobileNavigation(false)}>Pricing</Link>
				<Link href="/aboutUs" onClick={() => setShowMobileNavigation(false)}>About us</Link>
				<Link href="/contact" onClick={() => setShowMobileNavigation(false)}>Contact</Link>
			</motion.div>
		</div>
	);
};

//todo: humburger komponente auslagern
//todo: navbar vollenden

export default Navbar;
