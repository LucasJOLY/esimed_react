import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";
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
      <Typography variant="h4" className="mb-10!">
        Connexion
      </Typography>
      <TextField label="Email" type="text" />
      <TextField label="Mot de passe" type="text" />
      <Button
        variant="contained"
        color="primary"
        className="mt-5!"
        sx={{
          backgroundColor: "#0faf52",
          borderRadius: 10,
          "&:hover": {
            backgroundColor: "#11873f",
          },
          color: "white",
        }}
      >
        Se connecter
      </Button>

      <NavLink
        to="/register"
        end
        style={{
          color: "#0faf52",

          marginTop: "20px",
          fontSize: "15px",
          textDecoration: "underline",
        }}
      >
        Pas encore inscrit ? S'inscrire
      </NavLink>
    </div>
  );
}

export default Login;
