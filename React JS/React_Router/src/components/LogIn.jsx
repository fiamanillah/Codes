import { useState } from "react";
import { auth } from "../utils/firebase";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
function LogIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
				console.log(userCredential.user);
			});
			console.log("Loged in");
		} catch (error) {
			console.log(error.message);
		}
	}

	function googleLogIn() {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider).then(async (res) => {
			console.log(res);
		});
	}

	function handleSignOut() {
		signOut(auth).then(() => {
			console.log("Sogned out");
		});
	}

	function githubLogIn() {
		const gitHubProvider = new GithubAuthProvider();
		signInWithPopup(auth, gitHubProvider).then((res) => {
			console.log(res);
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<button
				onClick={() => {
					handleSignOut();
				}}>
				SignOut
			</button>
			<button onClick={githubLogIn}>Github</button>
			<h3>Login</h3>

			<div className="mb-3">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div className="mb-3">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div className="d-grid">
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</div>

			<button
				onClick={(e) => {
					e.preventDefault();
					googleLogIn();
				}}>
				Google
			</button>
			<p className="forgot-password text-right">
				New user <a href="/register">Register Here</a>
			</p>
		</form>
	);
}

export default LogIn;
