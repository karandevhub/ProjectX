import React, { useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import axios from "axios";
import "./style.css"

const RTMPstream = () => {

  useEffect(() => {
    let canvas = document.getElementById("video-canvas");
    let url = "ws://localhost:9999";
    new JSMpeg.Player(url, { canvas: canvas });
  }, []);

  const rtspurl = "http://localhost:4000/stream";

  const httpRequest = async(url) => {
   return await axios.get(url)
     .then(response => {
       console.log("Request successful:", response.data);
       return response.data;
     })
     .catch(error => {
       console.error("Error making request:", error);
       throw error; 
     });
 };
 
 const startRTSPFeed = () => {
   httpRequest(rtspurl)
     .then(data => {
       console.log("RTSP feed started successfully:", data);
     })
     .catch(error => {
       console.error("Error starting RTSP feed:", error);
     });
 };
 
 const stopRTSPFeed = () => {
   httpRequest("http://localhost:4000/stream?rtsp=stop")
     .then(data => {
       console.log("RTSP feed stopped successfully:", data);
     })
     .catch(error => {
       console.error("Error stopping RTSP feed:", error);
     });
 };
 
  return (
    <div className="video-player-container">
      
        <canvas className="video-canvas" id="video-canvas"></canvas>
     
      <div className="button-container">
        <button className="start-button" onClick={startRTSPFeed}>Start RTSP Feed</button>
        <button className="stop-button" onClick={stopRTSPFeed}>Stop RTSP Feed</button>
      </div>
    </div>
  );
};

export default RTMPstream;
