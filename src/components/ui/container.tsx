import React from "react";

type ContainerProps = {
	children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
	const { children } = props;
	return (
		<div className="flex min-h-[100vh] flex-col items-center justify-between">
			{children}
		</div>
	);
};

export default Container;


//todo: create a homepage container and a main container or just use the classnames in the layout directly

