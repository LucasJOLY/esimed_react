import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokeSearch from "./PokeSearch";
import MuiThemeProvider from "./MuiTheme";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <ToastContainer />
      <MuiThemeProvider>
        <PokeSearch></PokeSearch>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
