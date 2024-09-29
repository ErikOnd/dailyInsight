import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/ui/container";

type LayoutProps = {
	children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<Container>
			<Navbar />
			<main>
				{children}
			</main>
			<Footer />
		</Container>
	);
};

export default MainLayout;
