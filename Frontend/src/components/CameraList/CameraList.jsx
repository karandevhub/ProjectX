// CameraList.js
import React from "react";
import "./Style.css"

const CameraList = ({ cameras }) => {
  return (
    <div>
      <h2>Camera Devices</h2>
      <ul>
        {cameras.map((camera) => (
          <li key={camera.id}>
            {camera.name} - {camera.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CameraList;
