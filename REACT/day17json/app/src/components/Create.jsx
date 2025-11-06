import axios from "axios";
import React, { useEffect, useState } from "react";

const Create = () => {
  const [todolist, setTodolist] = useState([]);
  const [inputText, setinputText] = useState("");

  async function handleAdd() {
    console.log(inputText);
    let response = await axios.post("http://localhost:3000/todolist", {
      task: inputText,
    });
    console.log(response);
    getFetch();
    setinputText("");
  }

  async function getFetch() {
    let response = await axios.get("http://localhost:3000/todolist");
    console.log(response.data);
    setTodolist(response.data);
  }
  useEffect(() => {
    getFetch();
  }, []);
  return (
    <>
      <h1>Todolist</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <table border={""}>
        <thead>
          <tr>
            <th>id</th>
            <th>task</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.task}</td>
                <td>action</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Create;
