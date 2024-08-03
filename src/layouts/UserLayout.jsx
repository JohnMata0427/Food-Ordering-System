import { useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@components/Footer";
import Header from "@components/Header";

export default function UserLayout() {
	const location = useLocation().pathname.split("/")[1].replace(/-/g, " ");
	const locationCapitalized =
		location.charAt(0).toUpperCase() + location.slice(1);

	useEffect(() => {
		document.title = `Asociación de la ESFOT - ${locationCapitalized}`;
	}, []);

	return (
		<>
			<Header></Header>
			<main>
				<Outlet />
			</main>
			<Footer></Footer>
		</>
	);
}
