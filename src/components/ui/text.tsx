import React from "react";

type TextProps = {
	className?: string;
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	size?: "xs" | "small" | "medium" | "large" | "xl";
};

const Text = (props: TextProps) => {
	const { className = "", children = "", variant = "primary", size = "medium" } = props;
	const variantClass = variant === "secondary" ? "text-gray-500" : "text-black";

	const sizeClass = {
		xs: "text-[13px]",
		small: "text-[14px] md:text-[16px] lg:text-[18px]",
		medium: "text-[16px] md:text-[18px] lg:text-[20px]",
		large: "text-[18px] md:text-[20px] lg:text-[24px]",
		xl: "text-[20px] md:text-[24px] lg:text-[28px]",
	}[size];

	return <p className={`${sizeClass} ${variantClass} ${className}`}>{children}</p>;
};

export default Text;
