import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokeSearch from "./PokeSearch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <PokeSearch></PokeSearch>
    </Fragment>
  );
}

export default App;
