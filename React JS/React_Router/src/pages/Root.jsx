import { Outlet } from "react-router-dom";
import NavLinks from "../components/NavLinks";

function Root() {
	return (
		<div>
			<NavLinks />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Root;
