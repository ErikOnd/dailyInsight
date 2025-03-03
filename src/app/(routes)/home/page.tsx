"use client";

import Headline from "@/components/ui/headline";
import Lottie from "lottie-react";
import heroAnimation from "@/assets/hero_animation.json";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import HomePageLayout from "@/app/layouts/HomePageLayout";
import { useTranslations } from "next-intl";

const Home = () => {
	const t = useTranslations("homepage");

	return (
		<HomePageLayout>
			<div className="content-holder my-12 flex flex-row justify-between md:my-24">
				<div className="flex w-3/5 flex-col gap-8">
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
				<div className="mt-16 h-full w-2/5  max-w-fit animate-random-shift self-start sm:mt-0">
					<Lottie
						animationData={heroAnimation}
						loop={false}
						autoplay={true}
						style={{ width: '100%', height: '100%' }}
					/>
				</div>
			</div>
		</HomePageLayout>
	);
};

export default Home;
