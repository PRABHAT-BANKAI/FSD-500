import React, { useState } from "react";
import Count from "./components/Count";

const App = () => {
  // functional component
  //what is hooks in react (hooks are features react )
  let [state, setState] = useState(0);

  function handleInc() {
    setState(state + 1);
  }
  function handleDec() {
    setState(state - 1);
  }

  return (
    <div>
      <Count  number={state} userName={"superman"} />
      <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};

export default App;
