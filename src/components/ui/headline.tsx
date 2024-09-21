import React from "react";

type HeadlineProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    children: React.ReactNode;
};

const fontSizeMap = {
	h1: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
	h2: "text-4xl md:text-5xl lg:text-6xl",
	h3: "text-3xl md:text-4xl lg:text-5xl",
	h4: "text-2xl md:text-3xl lg:text-4xl",
	h5: "text-xl md:text-2xl lg:text-3xl",
	h6: "text-lg md:text-xl lg:text-2xl",
};

const Headline = (props: HeadlineProps) => {
	const { as: Tag = "h2", className = "", children } = props;
	const fontSizeClass = fontSizeMap[Tag];

	return <Tag className={`${fontSizeClass} font-poppins font-black ${className}`}>{children}</Tag>;
};

export default Headline;
