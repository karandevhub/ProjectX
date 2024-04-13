// CameraList.js
import React from "react";
import "./Style.css";
import RTMPstream from "../VideoPlayer/RTMPstream";

const CameraList = ({ cameras }) => {
  return (
    <div className="container">
      <h1>Camera Devices</h1>
      <RTMPstream />
    </div>
  );
};

export default CameraList;
