import React from "react";

type ContainerProps = {
    children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
    const { children } = props;
    return <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
};

export default Container;
