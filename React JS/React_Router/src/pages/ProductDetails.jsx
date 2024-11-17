import { useParams } from "react-router-dom";

function ProductDetails() {
	const params = useParams();

	return (
		<div>
			<h1>This is product details page</h1>
			<span>{params.productId}</span>
		</div>
	);
}

export default ProductDetails;
