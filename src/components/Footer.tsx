import React from "react";
import Text from "@/components/ui/text";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="flex w-full flex-wrap justify-between gap-10 py-4">
			<div className="min-w-48">
				<Text className="text-xl font-bold">Company Name</Text>
				<Text className="mt-2 text-gray-600">2021 © Lando</Text>
				<Text className="text-gray-600">All rights reserved.</Text>
			</div>
			<div className="min-w-48">
				<Text className="text-lg font-semibold">Company</Text>
				<ul className="mt-4 space-y-2">
					<li>
						<Link
							href="/"
							className="text-gray-700 hover:underline">
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/pricing"
							className="text-gray-700 hover:underline">
							Pricing
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="text-gray-700 hover:underline">
							About us
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="text-gray-700 hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="min-w-48">
				<Text className="text-lg font-semibold">Follow us</Text>
				<ul className="mt-4 space-y-2">
					<li>
						<Link
							href="https://facebook.com"
							className="text-gray-700 hover:underline">
							Facebook
						</Link>
					</li>
					<li>
						<Link
							href="https://instagram.com"
							className="text-gray-700 hover:underline">
							Instagram
						</Link>
					</li>
					<li>
						<Link
							href="https://twitter.com"
							className="text-gray-700 hover:underline">
							Twitter
						</Link>
					</li>
					<li>
						<Link
							href="https://linkedin.com"
							className="text-gray-700 hover:underline">
							LinkedIn
						</Link>
					</li>
				</ul>
			</div>
			<div className="min-w-48">
				<Text className="text-lg font-semibold">Legal</Text>
				<ul className="mt-4 space-y-2">
					<li>
						<Link
							href="/privacy-policy"
							className="text-gray-700 hover:underline">
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link
							href="/terms-of-service"
							className="text-gray-700 hover:underline">
							Terms Of Service
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
