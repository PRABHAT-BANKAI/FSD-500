import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [inputText, setInputText] = useState({ username: "", email: "" });
  const [error, setError] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      console.log("everything is good");
      setInputText({ username: "", email: "" });
    }
  }

  function validation() {
    let objError = {};
    let val = true;

    if (!inputText.username.trim()) {
      objError.userName = "invalid user name ";
      val = false;
    }

    if (!inputText.email.trim()) {
      objError.email = "invalid email";
      val = false;
    }

    setError(objError);

    return val;
  }
  return (
    <div>
      <h1>Form Validation</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">User name</label>
          <br />
          <input
            type="text"
            value={inputText.username}
            onChange={(e) => {
              setInputText({ ...inputText, username: e.target.value });
            }}
          />
          {error.userName && <p style={{ color: "red" }}>{error.userName}</p>}
        </div>
        <div>
          <label htmlFor="">User email</label>
          <br />
          <input
            type="text"
            value={inputText.email}
            onChange={(e) => {
              setInputText({ ...inputText, email: e.target.value });
            }}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
