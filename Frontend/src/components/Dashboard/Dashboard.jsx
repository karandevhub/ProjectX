// Dashboard.js
import React from "react";
import CameraList from "../CameraList/CameraList";
import Map from "../Map/Map";
import "./Style.css"
import CarForm from "../Form/Search";
import RTMPStream from "../VideoPlayer/RTMPstream";


const Dashboard = ({ cameras, mapCenter, mapMarkers }) => {
  return (
    <div>
      <CameraList cameras={cameras} />
      <CarForm/>
      <RTMPStream/>
      <Map cameras={cameras} />
    </div>
  );
};

export default Dashboard;
