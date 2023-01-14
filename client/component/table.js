import React, { useState, useEffect } from "react";
import { tododata } from "../data/tododata";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  console.log(tododata);
  useEffect(() => {
    setTodos(tododata);
  }, [todos, tododata]);

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo !== "")
      tododata.push({
        userId: 1,
        id: tododata.length + 1,
        title: newTodo,
        completed: false,
      });
    setTodos([...todos]);
    setNewTodo("");
    console.log(tododata);
  }

  function handleComplete(id) {
    todos.map((n) => {
      if (n.id == id) n.completed = true;
    });
    setTodos([...todos]);
  }

  return (
    <div className="mx-auto p-6">
      <div className="my-auto bg-gray-400 rounded-lg h-96 overflow-y-auto shadow-md p-6">
        <form
          onSubmit={handleSubmit}
          className="flex items-center border-stone-900 "
        >
          <input
            className="bg-black border-green-900 text-white  p-2 rounded-lg w-full"
            type="text"
            value={newTodo}
            placeholder="Enter a Todo"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="bg-black p-2 rounded-lg ml-2 text-white">
            Add Todo
          </button>
        </form>
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-300 p-2 border-red-900 rounded-lg my-2 flex items-center"
            >
              <span className="mr-2 bg">{todo.title}</span>
              <button
                className={` px-3 py-2 rounded-lg text-white ${
                  todo.completed ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={() => handleComplete(todo.id)}
              >
                {todo.completed ? "Completed" : "Complete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
