import React, { useEffect, useState } from "react";

const App = () => {
  const [boolean, setBoolean] = useState(false);
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("data")) || 0
  );
  function handleDarkmode() {
    setBoolean(!boolean);
  }
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(count));
  }, [count]);
  return (
    <div style={{backgroundColor:boolean?"black":"white",color:boolean?"white":"black"}}>
      <button onClick={handleDarkmode}>Dark mode</button>
      <h1>Counter Application</h1>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
