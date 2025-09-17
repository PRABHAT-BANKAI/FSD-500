import React, { useState } from "react";

//controlled components
const App = () => {
  const [inputText, setInputText] = useState("");
  const [password, setPassword] = useState("");
  const [array, setArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // helps into dont refresh the page
    if (!inputText.trim() && !password.trim()) {
      alert("all fields are required");
      return;
    }
    let object = {
      inputText,
      password,
    };

    setArray([...array, object]); // asyncronous
  }
  console.log(array);
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="">email:</label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
