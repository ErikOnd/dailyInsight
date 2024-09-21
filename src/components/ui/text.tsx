import React from "react";

type TextProps = {
    className?: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary"; // For color variants
    size?: "small" | "medium" | "large" | "xl"; // For text sizes
};

const Text = (props: TextProps) => {
	const { className = "", children = "", variant = "primary", size = "medium" } = props;

	// Define styles based on variant and size
	const variantClass = variant === "secondary" ? "text-gray-500" : "text-black";

	const sizeClass = {
		small: "text-sm md:text-base",
		medium: "text-base md:text-lg",
		large: "text-lg md:text-xl",
		xl: "text-xl md:text-2xl",
	}[size];

	return <p className={`${sizeClass} ${variantClass} ${className}`}>{children}</p>;
};

export default Text;
