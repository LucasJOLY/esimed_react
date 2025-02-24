import React, { useState } from "react";
import "./App.css";
const TodoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 mr-6"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button
        className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-700"
        type="submit"
      >
        Ajouter
      </button>
    </form>
  );
};

export default TodoForm;
