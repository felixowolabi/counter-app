import React, { useReducer, useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1000 };
    case "decrement":
      return { count: state.count - 1000 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <h3>Counting Usestate</h3>
      <button onClick={decrement}>- </button>
      <span>{state.count}</span>
      <button onClick={increment}>+ </button>
    </>
  );
}

/*


import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h3>Counting Usestate</h3>
      <button onClick={decrement}>- </button>
      <span>{count}</span>
      <button onClick={increment}>+ </button>
    </>
  );
}

*/
