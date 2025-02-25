import { Button, TextField } from "@mui/material";
import React from "react";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        height: "100%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="text"
        sx={{
          "& .MuiOutlinedInput-root": {
            border: "1px solid #fff",
            color: "#fff",
          },
          "& .MuiFormLabel-root": {
            color: "#fff",
          },
        }}
      />
      <TextField
        label="Mot de passe"
        type="text"
        sx={{
          color: "#fff",
          "& .MuiOutlinedInput-root": {
            border: "1px solid #fff",
            color: "#fff",
          },
          "& .MuiFormLabel-root": {
            color: "#fff",
          },
        }}
      />
      <Button variant="contained" color="primary">
        Se connecter
      </Button>
    </div>
  );
}

export default Login;
