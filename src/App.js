import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((firstCount) => firstCount + 1);
  }

  function decrement() {
    setCount((firstCount) => firstCount - 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
