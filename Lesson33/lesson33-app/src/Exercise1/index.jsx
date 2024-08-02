import { useState } from "react";

export const Exercise1 = () => {
  const [buttonLabel, setButtonLabel] = useState('Click me!');


  function clickHandler () {
    setButtonLabel((prevValue) => {
      return `${prevValue}!`;
    });
  }

  return (
    <button onClick={clickHandler}>{buttonLabel}</button>
  );
};

