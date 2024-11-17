import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import Users, { loadUsers } from "./pages/Users";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{ path: "", element: <Home /> },
				{
					path: "product",
					element: <Product />,
				},
				{
					path: "product/:productId",
					element: <ProductDetails />,
				},
				{
					path: "users",
					element: <Users />,
					loader: loadUsers,
				},
				{ path: "signup", element: <SignUp /> },
				{ path: "login", element: <LogIn /> },
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
