import React, { useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import "./style.css";

const RTMPstream = () => {
  useEffect(() => {
    // Array of RTMP stream URLs
    const rtmpUrls = [
      "ws://localhost:9999",
      "ws://localhost:10000", // Add more URLs if needed
      "ws://localhost:10001",
      "ws://localhost:10002",
      "ws://localhost:10003",
    ];

    // Loop through each RTMP stream URL and create a player for each
    rtmpUrls.forEach((url, index) => {
      const canvasId = `video-canvas-${index}`;
      const canvas = document.getElementById(canvasId);
      new JSMpeg.Player(url, { canvas: canvas });
    });
  }, []);

  return (
    <div className="video-player-container">
      {/* Render a canvas element for each stream */}
      <canvas className="video-canvas" id="video-canvas-0"></canvas>
      <canvas className="video-canvas" id="video-canvas-1"></canvas>
      <canvas className="video-canvas" id="video-canvas-2"></canvas>
      <canvas className="video-canvas" id="video-canvas-3"></canvas>
      <canvas className="video-canvas" id="video-canvas-4"></canvas>
      {/* Add more canvas elements if needed */}
    </div>
  );
};

export default RTMPstream;
