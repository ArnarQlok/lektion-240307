import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
    //updaterar
    setCount((prevCount) => prevCount + 10);
    // uppdaterar
    setCount((prevCount) => prevCount + 1);
    //updaterar
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <p className="counter-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        -
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
