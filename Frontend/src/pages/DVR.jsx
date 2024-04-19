import React from "react";
import Dashboard from "../components/Dashboard/Dashboards";
import videocamImage from '../assets/videocam.png';

const DVR = () => {
  const DVRs = [
    { id: 1, name: "DVR 1", location: "Brahampuri", status: "connected" },
    { id: 2, name: "DVR 2", location: "Kalwara", status: "disconnected" },
    { id: 3, name: "DVR 3", location: "Jobner", status: "connected" },
    { id: 4, name: "DVR 4", location: "Mahapura", status: "connected" },
    { id: 5, name: "DVR 5", location: "Asalpur", status: "disconnected" },
  ];

  return (
    <Dashboard>
      <div className="flex flex-col items-center">
        {DVRs.map((dvr) => (
          <div
            key={dvr.id}
            className="w-1/3 h-28 bg-gray-200 my-4 p-4 flex items-center rounded-lg shadow-md justify-between"
          >
            <div className="flex items-center">
              <img
                src={videocamImage}
                alt="Video Camera"
                className="h-6 w-6 mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{dvr.name}</h2>
                <p className="text-sm">{dvr.location}</p>
              </div>
            </div>
            <button
              className={`px-4 py-2 rounded ${
                dvr.status === "connected" ? "bg-green-500" : "bg-red-500"
              } text-white font-semibold`}
            >
              {dvr.status === "connected" ? "Connected" : "Disconnected"}
            </button>
          </div>
        ))}
      </div>
    </Dashboard>
  );
};

export default DVR;
