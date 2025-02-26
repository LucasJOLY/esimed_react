import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import useDispatchNavigate from "../hook/useDispatchNavigate";
import { logOut } from "../auth/store/slice";
import { useNavigate } from "react-router";

function NavBar() {
  const dispatchNavigate = useDispatchNavigate();
  let navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  const logout = async () => {
    await dispatchNavigate(logOut(), "/login");
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
