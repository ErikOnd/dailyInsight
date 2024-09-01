import React from "react";

type TextProps = {
    className?: string;
    children: React.ReactNode;
};

const Text = (props: TextProps) => {
    const { className, children = "" } = props;

    return <p className={`text-base md:text-lg lg:text-xl ${className}`}>{children}</p>;
};

export default Text;
