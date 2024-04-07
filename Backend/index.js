const express = require('express');
const Stream = require('node-rtsp-stream');
const cors = require('cors');


const app = express();
const port = 4000;
let stream = null;
let currentRtspStreamUrl='rtsp://0.tcp.in.ngrok.io:13770//h264_ulaw.sdp';
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true 
  })
);

app.get('/stream', (req, res) => {
  const id = req.params.id;
  const newRtspStreamUrl = currentRtspStreamUrl;

  // Create the WebSocket stream only if it doesn't exist or the RTSP URL has changed
  if (!stream || currentRtspStreamUrl !== newRtspStreamUrl) {
    if (stream) {
      stream.stop();
    }
    stream = new Stream({
      name: 'Camera Stream',
      streamUrl: newRtspStreamUrl,
      wsPort: 9999
    });
    currentRtspStreamUrl = newRtspStreamUrl;
  }


  res.send('Streaming started');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
