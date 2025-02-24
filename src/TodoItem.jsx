import React from "react";
import "./App.css";

const TodoItem = ({ task, mapTasks, index, removeTask, checkTask }) => {
  return (
    <li
      className={mapTasks[index][1] == true ? "tabStyle checked" : "tabStyle"}
    >
      <input
        type="checkbox"
        checked={mapTasks[index][1]}
        onChange={(e) => {
          checkTask(index, e.target.checked);
        }}
      ></input>
      {task}
      <button onClick={() => removeTask(index)}>Supprimer</button>
    </li>
  );
};

export default TodoItem;
