// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/users">Utilisateurs</Link>

      {user ? (
        <>
          <span>Bienvenue, {user.name}</span>
          <button onClick={logout}>Déconnexion</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
