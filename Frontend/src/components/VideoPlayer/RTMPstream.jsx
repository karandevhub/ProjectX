import React, { useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import "./style.css";

const RTMPstream = () => {
  useEffect(() => {

    const rtmpUrls = [
      "ws://34.93.193.135:9999",
      "ws://34.93.193.135:10000", 
      "ws://34.93.193.135:10001",
      "ws://34.93.193.135:10002",
      "ws://34.93.193.135:10003",
      "ws://34.93.193.135:10004",
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
      
      <canvas className="video-canvas" id="video-canvas-0"></canvas>
      <canvas className="video-canvas" id="video-canvas-1"></canvas>
      <canvas className="video-canvas" id="video-canvas-2"></canvas>
      <canvas className="video-canvas" id="video-canvas-3"></canvas>
      <canvas className="video-canvas" id="video-canvas-4"></canvas>
      <canvas className="video-canvas" id="video-canvas-5"></canvas>

    </div>
  );
};

export default RTMPstream;
