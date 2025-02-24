import React from "react";
import TodoItem from "./TodoItem";
import "./App.css";
const TodoList = ({ tasks, mapTasks, removeTask, checkTask }) => {
  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            removeTask={removeTask}
            mapTasks={mapTasks}
            checkTask={checkTask}
          />
        ))
      ) : (
        <p>Aucune tâche</p>
      )}
    </ul>
  );
};

export default TodoList;
