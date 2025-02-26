import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { register } from "../data/coursesAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = async () => {
    try {
      await register(username, email, password);
      toast.success("Inscription réussie");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'incription");
    }
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
        Inscription
      </Typography>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        label="Nom d'utilisateur"
        type="text"
      />
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
        variant="contained"
        color="primary"
        className="mt-5!"
        onClick={handleRegister}
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
