import React from "react";

type ContainerProps = {
    children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
    const { children } = props;
    return (
        <div className="mx-auto grid h-screen w-screen max-w-screen-xl grid-rows-[auto_1fr_auto] px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
};

export default Container;
