import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
function NavBar() {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <Button onClick={() => navigate("/")}>Accueil</Button>
      {token && <Button onClick={() => navigate("/courses")}>Ma liste</Button>}
      <Button onClick={() => navigate("/about")}>A propos</Button>
      <Button onClick={() => navigate("/contact")}>Contact</Button>
      <Button
        onClick={() => {
          if (token) {
            logout();
          } else {
            navigate("/login");
          }
        }}
      >
        {token ? "Déconnexion" : "Connexion"}
      </Button>
    </div>
  );
}

export default NavBar;
