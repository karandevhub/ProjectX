// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import "./Style.css";
import Splash from "../Splash/Splash";
import Page from "../page";
import Templates from "../Notification";
import CameraList from "../CameraList/CameraList";

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleLogout = () => {
    setAuthenticated(false);
  };

  const demoCameras = [
    {
      id: 1,
      name: "Camera 1",
      status: "Active",
      geocode: [23.636938, 86.1655985],
      popup: "Location 1",
    },
    {
      id: 2,
      name: "Camera 2",
      status: "Inactive",
      geocode: [23.656003, 86.168129],
      popup: "Location 2",
    },
    {
      id: 3,
      name: "Camera 3",
      status: "Active",
      geocode: [23.682102, 86.094952],
      popup: "Location 3",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard cameras={demoCameras} />}
        />
        <Route path="/CameraList" element={<CameraList />} />
        <Route path="/" element={<Splash/>}/>
        <Route path="/page" element={<Page/>}/>
        <Route path="/Notification" element={<Templates/>}/>
      </Routes>
    </Router>
  );
};

export default App;
