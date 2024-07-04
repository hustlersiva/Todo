import React, { useRef, useState, useEffect } from "react";
import Todoitems from "./Todoitems";

const Todo = () => {
  const inputref = useRef();
  const [todo, settodo] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const add = () => {
    const inputText = inputref.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    settodo((prev) => {
      return [...prev, newTodo];
    });
    inputref.current.value = "";
  };

  const del = (id) => {
    settodo((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggleComplete = (id) => {
    settodo((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      });
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  return (
    <div className="flex flex-col w-11/12 max-w-lg min-h-[500px] rounded-md p-7 bg-opacity-70 backdrop-blur-md border-2 border-white font-poppin">
      <div className="flex justify-center p-2 items-center">
        <div>
          <svg
            className="size-10 fill-blue-800 mr-2"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="fill-blue-800"
              fillRule="evenodd"
              d="M4,4 L9,4 C9.55228,4 10,3.55228 10,3 C10,2.44772 9.55228,2 9,2 L4,2 C2.89543,2 2,2.89543 2,4 L2,12 C2,13.1046 2.89543,14 4,14 L12,14 C13.1046,14 14,13.1046 14,12 L14,10 C14,9.44771 13.5523,9 13,9 C12.4477,9 12,9.44771 12,10 L12,12 L4,12 L4,4 Z M15.2071,2.29289 C14.8166,1.90237 14.1834,1.90237 13.7929,2.29289 L8.5,7.58579 L7.70711,6.79289 C7.31658,6.40237 6.68342,6.40237 6.29289,6.79289 C5.90237,7.18342 5.90237,7.81658 6.29289,8.20711 L7.79289,9.70711 C7.98043,9.89464 8.23478,10 8.5,10 C8.76522,10 9.01957,9.89464 9.20711,9.70711 L15.2071,3.70711 C15.5976,3.31658 15.5976,2.68342 15.2071,2.29289 Z"
            />
          </svg>
        </div>
        <h1 className="text-black font-bold text-3xl">Todo List</h1>
      </div>
      <div className="mt-5 flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="text-xl text-center flex-1 text-black rounded-full bg-transparent outline-none h-14 pl-6 pr-2 hover:focus:text-black focus:placeholder:"
          type="text"
          name="todo"
          id="todo"
          placeholder="Add your task"
          autoComplete="off"
          ref={inputref}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-blue-800 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD
        </button>
      </div>
      {todo.map((item) => (
        <Todoitems
          key={item.id}
          {...item}
          deletetodo={del}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default Todo;
