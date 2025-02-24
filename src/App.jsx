import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Counter />
    </Fragment>
  );
}

export default App;
