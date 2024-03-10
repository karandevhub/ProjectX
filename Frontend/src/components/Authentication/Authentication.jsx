// Authentication.js
import React from "react";
import { Link } from "react-router-dom";
import "./Style.css"

const Authentication = ({ isAuthenticated, onLogout }) => {
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Authentication;
