import { useState } from "react";

export const Exercise3 = () => {
	const [count, setCount] = useState(0);

	function clickHandler() {
		setCount((prevValue) => prevValue+1);
	}

	return (
		<>
			<div>Count: {count}</div>
			<button onClick={clickHandler}>Click to increment</button>
		</>
	);
};
