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





























// import React, { useEffect, useRef } from "react";
// import "./style.css";

// const RTMPstream = () => {
//   const videoRef = useRef(null);
//   const wsRef = useRef(null);

//   useEffect(() => {
  
//     wsRef.current = new WebSocket("ws://127.0.0.1:8000/stream");

//     wsRef.current.onopen = () => {
//       console.log("WebSocket connection established.");
//     };

      
//     wsRef.current.onmessage = (event) => {
//       const frameData = event.data;
//           console.log("WebSocket received")
     
//       if (videoRef.current) {
//         videoRef.current.src = `data:image/jpeg;base64,${frameData}`;
//       }
//     };

//     wsRef.current.onclose = () => {
//       console.log("WebSocket connection closed.");
//     };

   
//     return () => {
//       if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
//         wsRef.current.close();
//       }
//     };
//   }, []);

//   return (
//     <div className="video-player-container">
//       <video
//         id="video"
//         ref={videoRef}
//         autoPlay
//         controls
//         style={{ maxWidth: "100%", maxHeight: "100%", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
//       />
//     </div>
//   );
// };

// export default RTMPstream;
