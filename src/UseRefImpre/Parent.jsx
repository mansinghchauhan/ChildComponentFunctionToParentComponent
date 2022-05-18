import { useRef } from "react";

import Child from "./Child";

const Parent = () => {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.focus();
  };

  const getCounterValue = () => {
    const value = childRef.current.getCounterValue();
    console.log(value);
  };

  const increment = () => {
    childRef.current.inc();
  };
  const decrement = () => {
    childRef.current.dec();
  };

  return (
    <div style={{ padding: 10, border: "2px solid blue" }}>
      <Child ref={childRef} />
      <button onClick={handleClick}>Click to call Child's function</button>
      <button onClick={getCounterValue}>Get Value</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Parent;
