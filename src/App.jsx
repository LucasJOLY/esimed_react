import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./Hello";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Hello />
    </Fragment>
  );
}

export default App;
