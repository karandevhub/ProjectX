// Dashboard.js
import React from "react";
import CameraList from "../CameraList/CameraList";
import Map from "../Map/Map";
import "./Style.css"


const Dashboard = ({ cameras, mapCenter, mapMarkers }) => {
  return (
    <div>
      <CameraList cameras={cameras} />
      <Map cameras={cameras} />
    </div>
  );
};

export default Dashboard;
