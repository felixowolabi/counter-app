import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((TisheCount) => TisheCount + 1);
  }

  function decrement() {
    setCount((TisheCount) => TisheCount - 1);
  }

  return (
    <>
      <button onClick={increment}>Increment + </button>
      <span>{count}</span>

      <button onClick={decrement}>Decrement - </button>
    </>
  );
}
