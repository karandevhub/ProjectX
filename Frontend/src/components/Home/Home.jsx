// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../Login/Login";
import "./Style.css";
import Splash from "../Splash/Splash";
import Page from "../page";
import Templates from "../Notification";
import CameraList from "../CameraList/CameraList";
import Dashboard from "../Dashboard/Dashboards";
import AddCamera from "../CameraList/AddCamera";
import RemoveCamera from "../CameraList/RemoveCamera";
import DVR from "../../pages/DVR";
import Map from "../../pages/Map/Map";

import Detection from "../../pages/Detection";
import Reports from "../../pages/Reports";
import Alerts from "../../pages/Alerts";
import UserSettings from "../../pages/UserSettings";
import Settings from "../../pages/Settings";
import CameraPage from "../../pages/CameraList";

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
        {/* Auth routes */}

        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Camera routes */}
        <Route path="/*" element={<CameraPage />} />
        
        <Route path="/DVR" element={<DVR />} />
        <Route path="/Map" element={<Map cameras={demoCameras}/>} />
        <Route path="/Detection" element={<Detection />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Alerts" element={<Alerts />} />
        <Route path="/User" element={<UserSettings />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/page" element={<Page />} />
        <Route path="/Notification" element={<Templates />} />
      </Routes>
    </Router>
  );
};

export default App;
