import { useLoaderData } from "react-router-dom";

function Users() {
	const userData = useLoaderData();

	console.log(userData);
	return (
		<div>
            <ul>
			{userData.map((user)=>(<li key={user.id}>{user.name}</li>))}
            </ul>
		</div>
	);
}

export default Users;

export async function loadUsers() {
	const responce = await fetch("https://jsonplaceholder.typicode.com/users");

	if (!responce.ok) {
		throw new Error("Failed to fetch data");
	}

	return responce.json();
}
