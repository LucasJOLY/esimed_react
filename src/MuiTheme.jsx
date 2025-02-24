import { createTheme } from "@mui/material/styles";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";

const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0600ea",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const MuiThemeProvider = ({ children }) => {
  return <ThemeProvider theme={themeOptions}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
