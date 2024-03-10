import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic (e.g., API call)
    // If successful, navigate to the home screen
    navigate("/Dashboard");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
