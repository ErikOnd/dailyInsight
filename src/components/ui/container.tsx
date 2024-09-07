import React from "react";

type ContainerProps = {
    children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
    const { children } = props;
    return (
        <div className="mx-auto flex justify-center px-4 pt-28 sm:px-6 lg:px-8">
            <div className="flex max-w-5xl flex-col items-center justify-center space-y-4 sm:space-y-6 lg:space-y-8">
                {children}
            </div>
        </div>
    );
};

export default Container;
