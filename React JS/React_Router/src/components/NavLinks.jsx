import { NavLink } from "react-router-dom";

function NavLinks() {
	return (
		<nav className="w-full">
			<ul className="flex gap-4 font-bold text-2xl justify-center py-10 bg-yellow-200">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "text-yellow-600" : null)}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Product"
						className={({ isActive }) => (isActive ? "text-yellow-600" : null)}>
						Product
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/users"
						className={({ isActive }) => (isActive ? "text-yellow-600" : null)}>
						Users
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/signup"
						className={({ isActive }) => (isActive ? "text-yellow-600" : null)}>
						signup
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavLinks;
