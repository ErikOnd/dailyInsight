import React from "react";

type ContainerProps = {
    children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
    const { children } = props;
    return (
        <div className={`flex justify-center mx-auto pt-28 px-4 sm:px-6 lg:px-8`}>
            <div className={"flex flex-col max-w-5xl justify-center items-center space-y-4 sm:space-y-6 lg:space-y-8 "}>{children}</div>
        </div>
    );
};

export default Container;
