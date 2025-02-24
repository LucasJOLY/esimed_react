import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mapTasks, setMapTasks] = useState([]);

  const addTask = (task) => {
    const value = [task, false];
    setMapTasks([...mapTasks, value]);
  };

  const removeTask = (index) => {
    setMapTasks(mapTasks.filter((item, i) => i !== index));
  };

  const checkTask = (index, value) => {
    const newMapTasks = [...mapTasks];
    newMapTasks[index][1] = value;
    setMapTasks(newMapTasks);
  };

  return (
    <div className={darkMode ? "dark h-screen" : "h-screen"}>
      <div
        className={`flex items-center justify-center flex-col dark:bg-gray-900 dark:text-white h-full`}
      >
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 mb-5"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Changer de thème
        </button>
        <TodoForm addTask={addTask} />
        <TodoList
          mapTasks={mapTasks}
          removeTask={removeTask}
          checkTask={checkTask}
        />
      </div>
    </div>
  );
}

export default App;
