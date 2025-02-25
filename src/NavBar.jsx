import React from "react";
import { NavLink } from "react-router";
function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <NavLink to="/" end>
        Acceuil
      </NavLink>
      <NavLink to="/about" end>
        A propos
      </NavLink>
      <NavLink to="/contact">Contacts</NavLink>
      <NavLink to="/login">Connexion</NavLink>
    </nav>
  );
}

export default NavBar;
