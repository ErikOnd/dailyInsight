import { useState, useEffect } from "react";

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				setWindowDimensions({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			};

			// Set initial window dimensions
			handleResize();

			// Add event listener for window resize
			window.addEventListener("resize", handleResize);

			// Cleanup event listener on component unmount
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
