"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { MobileNavButton } from "@/components/ui/MobileNavButton";
import { motion } from "framer-motion";
import useWindowDimensions from "@/lib/useWindowDimensions";

const Navbar = () => {
	const [showMobileNavigation, setShowMobileNavigation] = useState(false);
	const { user, isLoading } = useUser();
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		return localStorage.getItem("isLoggedIn") === "true";
	});
	const { width } = useWindowDimensions();


	useEffect(() => {
		width > 1024 && setShowMobileNavigation(false);
	}, [width]);


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

	useEffect(() => {
		if (showMobileNavigation) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showMobileNavigation]);

	const mobileNavVariants = {
		hidden: { opacity: 0, x: "-100%", overflow: "hidden" },
		visible: { opacity: 1, x: 0, overflow: "hidden" },
	};

	return (
		<div className="relative flex w-full flex-col border-b border-black">
			<div className="content-holder flex w-full items-center justify-between self-center py-6">
				<div className="mr-28 text-3xl font-bold">Logo</div>
				<div className="hidden gap-10 font-bold lg:flex">
					<Link className="link" href="/home">Home</Link>
					<Link className="link" href="/pricing">Pricing</Link>
					<Link className="link" href="/aboutUs">About us</Link>
					<Link className="link" href="/contact">Contact</Link>
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
				className="content-holder absolute top-[100px] z-[1] flex h-[calc(100vh-100px)] w-full flex-col gap-5 border-b border-black bg-background py-10 text-2xl lg:hidden"
				variants={mobileNavVariants}
				initial="hidden"
				animate={showMobileNavigation ? "visible" : "hidden"}
				transition={{ duration: 0.3 }}
			>
				<Link href="/home" className="link w-fit" onClick={() => setShowMobileNavigation(false)}>Home</Link>
				<Link href="/pricing" className="link w-fit"
					  onClick={() => setShowMobileNavigation(false)}>Pricing</Link>
				<Link href="/aboutUs" className="link w-fit" onClick={() => setShowMobileNavigation(false)}>About
					us</Link>
				<Link href="/contact" className="link w-fit"
					  onClick={() => setShowMobileNavigation(false)}>Contact</Link>
			</motion.div>
		</div>
	);
};

export default Navbar;
