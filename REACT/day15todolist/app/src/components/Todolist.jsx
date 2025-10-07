import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  function handleAdd() {
    // console.log(inputText);
    if (!inputText.trim()) {
      alert("first you have to field input");
      return;
    }

    setTodolist([inputText, ...todolist]);

    //[batman,superman]
    setInputText("");
  }
  // console.log(todolist)
  function handleDelete(i) {
    let filterData = todolist.filter((element, index) => index != i);
    setTodolist(filterData);
  }
  function handleEdit(index) {
    setBoolean(true);
    setEditIndex(index);
    setInputText(todolist[index]);
  }

  function handleUpdate() {
    if (!inputText.trim()) {
      alert("first you have to feild the task");
      return;
    }

    let updateData = todolist.map((element, i) =>
      i == editIndex ? inputText : element
    );
    setTodolist(updateData);
    setBoolean(false)
    setInputText("")
  }

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
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add Task</button>
      )}
      {todolist.map((element, index) => {
        return (
          <div>
            <p key={index}>{element}</p>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleEdit(index);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
