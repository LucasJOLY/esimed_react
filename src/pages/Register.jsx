import { Button, TextField, Typography } from "@mui/material";
import React from "react";

function Register() {
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
        Inscription
      </Typography>
      <TextField label="Nom d'utilisateur" type="text" />
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
        S'inscrire
      </Button>
    </div>
  );
}

export default Register;
