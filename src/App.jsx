import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserProfile from "./UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <UserProfile name={"Lucas"} age={21} job={"Developpeur"} />
    </Fragment>
  );
}

export default App;
