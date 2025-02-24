import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [mapTasks, setMapTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    const value = [task, false];
    setMapTasks([...mapTasks, value]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((item, i) => i !== index));
    setMapTasks(mapTasks.filter((item, i) => i !== index));
  };

  const checkTask = (index, value) => {
    const newMapTasks = [...mapTasks];
    newMapTasks[index][1] = value;
    setMapTasks(newMapTasks);
  };

  return (
    <Fragment>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        mapTasks={mapTasks}
        removeTask={removeTask}
        checkTask={checkTask}
      />
    </Fragment>
  );
}

export default App;
