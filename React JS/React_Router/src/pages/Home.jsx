import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Hello Home!</h1>

			<p>
				Go to <Link to="/product">Products</Link>
			</p>
		</div>
	);
}

export default Home;
