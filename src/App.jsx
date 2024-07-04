import React from "react";
import Todo from "./Components/Todo";
import "./index.css"; // Import the CSS file for animations

const App = () => {
  return (
    <>
      <div className="animated-bg h-screen flex justify-center items-center text-white font-bold">
        <Todo />
      </div>
    </>
  );
};

export default App;
