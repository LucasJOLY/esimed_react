import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import useDispatchNavigate from "../hook/useDispatchNavigate";
import { signIn } from "./store/slice";
function Login() {
  const dispatchNavigate = useDispatchNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    await dispatchNavigate(signIn({ email, password }), "/courses");
    window.location.reload();
  };
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
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        type="text"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Mot de passe"
        type="password"
      />
      <Button
        onClick={handleLogin}
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
