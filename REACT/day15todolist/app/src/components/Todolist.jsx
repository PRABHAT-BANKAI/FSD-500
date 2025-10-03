import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  function handleAdd() {
    // console.log(inputText);
    if(!inputText.trim()){
      alert("first you have to field input")
      return
    }

    setTodolist([inputText, ...todolist]);

    //[batman,superman]
    setInputText("");
  }
  // console.log(todolist)

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add Task</button>
      {todolist.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
    </div>
  );
};

export default Todolist;
