import React from "react";

type HeadlineProps = {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
	children: React.ReactNode;
};

const Headline = (props: HeadlineProps) => {
	const { as: Tag = "h2", className = "", children } = props;

	return <Tag className={`font-roboto font-black ${className}`}>{children}</Tag>;
};

export default Headline;
