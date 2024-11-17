import { useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			const user = auth.currentUser;
			console.log(user);
			console.log("User Registered Successfully!!");
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<form onSubmit={handleRegister}>
			<h3>Sign Up</h3>

			<div className="mb-3">
				<label>First name</label>
				<input
					type="text"
					className="form-control"
					placeholder="First name"
					onChange={(e) => setFname(e.target.value)}
					required
				/>
			</div>

			<div className="mb-3">
				<label>Last name</label>
				<input
					type="text"
					className="form-control"
					placeholder="Last name"
					onChange={(e) => setLname(e.target.value)}
				/>
			</div>

			<div className="mb-3">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					placeholder="Enter email"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div className="mb-3">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>

			<div className="d-grid">
				<button type="submit" className="btn btn-primary">
					Sign Up
				</button>
			</div>
			<p className="forgot-password text-right">
				Already registered <a href="/login">Login</a>
			</p>
		</form>
	);
}

export default SignUp;
