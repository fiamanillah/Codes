import { Link } from "react-router-dom";

function Product() {
	const PRODUCTS = [
		{ id: 1, name: "Product 1" },
		{ id: 2, name: "Product 2" },
		{ id: 3, name: "Product 3" },
	];

	return (
		<div>
			<h1>This is product page</h1>

			<ul>
				{PRODUCTS.map((prod) => (
					<li key={prod.id}>
						{" "}
						<Link to={`/Product/${prod.id}`}>{prod.name}</Link>{" "}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Product;
