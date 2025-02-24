import React from "react";
import "./App.css";

const TodoItem = ({ task, checked, index, removeTask, checkTask }) => {
  return (
    <li
      className={`p-4 mb-4 rounded shadow-md flex items-center justify-between ${
        checked ? "bg-green-100 dark:bg-green-900" : "bg-white dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            checkTask(index, e.target.checked);
          }}
          className="mr-4"
        />
        <span
          className={`text-lg mr-4 ${
            checked
              ? "line-through text-gray-500 dark:text-gray-100"
              : "text-black dark:text-white"
          }`}
        >
          {task}
        </span>
      </div>
      <button
        onClick={() => removeTask(index)}
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
      >
        Supprimer
      </button>
    </li>
  );
};

export default TodoItem;
