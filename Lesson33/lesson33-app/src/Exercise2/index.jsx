import { useState } from 'react';

export const Exercise2 = () => {
	const [buttonLabel, setButtonLabel] = useState('on');

	function clickHandler() {
		setButtonLabel((prevValue) => {
			// Same as ternary statement below
      // if (prevValue === 'on') {
			// 	return 'off';
			// } else {
			// 	return 'on';
			// }
      return prevValue === 'on' ? 'off' : 'on';
		});
	}

	return <button onClick={clickHandler}>{buttonLabel}</button>;
};
