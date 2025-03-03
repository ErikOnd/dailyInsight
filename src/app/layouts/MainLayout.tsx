import React, { ReactNode } from "react";
import Container from "@/components/ui/container";
import Sidebar from "@/components/Sidebar";

type LayoutProps = {
	children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<Container>
			<Sidebar />
			<main>
				{children}
			</main>
		</Container>
	);
};

export default MainLayout;
