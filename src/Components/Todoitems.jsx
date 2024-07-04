import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Todoitems = ({ text, id, isComplete, toggleComplete, deletetodo }) => {
  return (
    <div className="flex items-center  font-Karla my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => toggleComplete(id)}
      >
        {isComplete ? (
          <svg
            className="size-10 fill-blue-700"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z" />
            <path d="M10.996 12.556 9.7 11.285l-1.4 1.43 2.704 2.647 4.699-4.651-1.406-1.422z" />
          </svg>
        ) : (
          <svg
            className="size-10 fill-blue-700"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
          >
            <path d="M9 11h6v2H9z" />
            <path d="M17 5H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM7 17V7h10l.002 10H7z" />
          </svg>
        )}
        {isComplete ? (
          <p className="text-slate-700 ml-4 line-through text-[20px] bg-transparent-text">
            {text}
          </p>
        ) : (
          <p className="text-slate-700 ml-4 text-[20px] bg-transparent-text">
            {text}
          </p>
        )}
      </div>
      <RiDeleteBin6Fill
        className="size-9 text-red-700 cursor-pointer"
        onClick={() => deletetodo(id)}
      />
    </div>
  );
};

export default Todoitems;
