import userEvent from "@testing-library/user-event";
import { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const App = () => {
  // reducer is the function we perform on the state to get the new state
  // dispatch is what you call to set the state.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // the above is the same as setting the state like this below
  // const [count, setCount] = useState(0);

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default App;
