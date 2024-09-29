"use client";
import React from "react";
import Headline from "@/components/ui/headline";
import Lottie from "react-lottie";
import heroAnimation from "@/assets/hero_animation.json";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import MainLayout from "@/app/layouts/MainLayout";
import { useTranslations } from "next-intl";

const Home = () => {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: heroAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const t = useTranslations("homepage");
	return (
		<MainLayout>
			<div className="content-holder my-6 flex flex-row justify-between">
				<div className="max-w-1/2 flex flex-col gap-8">
					<Text
						className="font-bold uppercase"
						variant="secondary"
						size="small">
						{t("supHeader")}
					</Text>
					<Headline as="h1"> {t("header")}</Headline>
					<Text> {t("text")}</Text>
					<div className="flex flex-wrap gap-4">
						<Button> {t("tryForFree")}</Button>
						<Button variant="outline"> {t("seeHowItWorks")}</Button>
					</div>
				</div>
				<div className="mt-16 h-full w-full max-w-fit animate-random-shift self-start sm:mt-0 ">
					<Lottie options={defaultOptions}
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
