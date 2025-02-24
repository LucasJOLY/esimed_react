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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TodoForm;
