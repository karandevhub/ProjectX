import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/Dashboard");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="w-72">
        <div className="text-center">
          <ion-icon
            name="shield-half-outline"
            class="text-white text-4xl"
          ></ion-icon>
          <p className="text-white text-2xl font-semibold mt-6">
            Sign in to NetraGuard
          </p>
        </div>
        <div className="bg-gray-700 rounded p-4 mt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-gray-200 bg-gray-800 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white flex justify-between"
              >
                <span>Password</span>
                <a href="" className="text-blue-500">
                  Forget Password
                </a>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-gray-200 bg-gray-800 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="submit"
              className="w-full py-2 text-lg text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600"
              value="Sign in"
            />
          </form>
        </div>
        <div className="text-center text-white mt-6">
          <span>Don't have an account? </span>
          <a href="" className="text-blue-500">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
