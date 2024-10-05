import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction } from "react";
import { clsx } from "clsx";


type MobileNavButtonProps = {
	isClicked: boolean,
	setIsClicked: Dispatch<SetStateAction<boolean>>,
}


export const MobileNavButton = (props: MobileNavButtonProps) => {

	const {
		isClicked,
		setIsClicked,
	} = props;

	const firstSpanClasses = clsx(
		"h-1 w-6 transform rounded-full bg-black transition duration-300",
		{ "translate-y-2.5 rotate-45": isClicked },
	);

	const secondSpanClasses = clsx(
		"h-1 w-6 rounded-full bg-black transition duration-300",
		{ "scale-x-0": isClicked },
	);

	const thirdSpanClasses = clsx(
		"h-1 w-6 transform rounded-full bg-black transition duration-300",
		{ "-translate-y-2.5 -rotate-45": isClicked },
	);


	return (
		<div className="z-2 block lg:hidden">
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
	);
};