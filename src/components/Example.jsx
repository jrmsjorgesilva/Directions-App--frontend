import React, { useRef, useState } from "react";

const Example = () => {
  const ref = useRef();

  const [value, setValue] = useState(0);

  const plus = () => {
    setValue((prevValue) => prevValue + 1);
    console.log(ref);
  };

  const minus = () => {
    setValue((prevValue) => prevValue - 1);
    console.log(ref.current);
  };

  return (
    <>
      <h1>Example Component</h1>
      <form ref={ref}>
        <label htmlFor="">Nome: </label>
        <input type="text" />
        <label htmlFor="">Email: </label>
        <input type="email" />
        <label htmlFor="">Telefone: </label>
        <input type="tel" />
      </form>
      <button onClick={() => plus()}>+++</button>
      {value}
      <button onClick={() => minus()}>---</button>
    </>
  );
};

export default Example;
