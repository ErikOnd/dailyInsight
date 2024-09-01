import React from "react";

type ContainerProps = {
    className?: string;
    children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
    const { children, className } = props;
    return (
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">{children}</div>
        </div>
    );
};

export default Container;
