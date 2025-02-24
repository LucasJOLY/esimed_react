import React from "react";
import TodoItem from "./TodoItem";
import "./App.css";
const TodoList = ({ mapTasks, removeTask, checkTask }) => {
  return (
    <ul className="flex justify-center items-center mt-5">
      {mapTasks.length > 0 ? (
        mapTasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task[0]}
            removeTask={removeTask}
            checked={task[1]}
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
