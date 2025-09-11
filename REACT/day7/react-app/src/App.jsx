import React, { useState } from "react";
import ProductPage from "./components/ProductPage";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <h1>Counter application</h1>

      <p>Count :{count}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
      disabled={count==0}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <button onClick={()=>{setCount(0)}}>reset</button> */}

      <ProductPage/>
    </div>
  );
};

export default App;
