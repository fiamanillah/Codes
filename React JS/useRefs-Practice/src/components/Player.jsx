import { useRef, useState } from "react";

export default function Player() {

  const [name, setName] = useState()
  const inputFiled = useRef(null)
  function handleOnClick() {
    setName(inputFiled.current.value);
    inputFiled.current.value ='';
  }

	return (
		<section id="player">
			<h2>Welcome {name ?? "unknown entity"}</h2>
			<p>
				<input ref={inputFiled} type="text" />
				<button onClick={handleOnClick}>Set Name</button>
			</p>
		</section>
	);
}
