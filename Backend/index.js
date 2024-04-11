const express = require('express');
const Stream = require('node-rtsp-stream');
const cors = require('cors');

const app = express();
const port = 4000;
let streams = [];
const currentRtspStreamUrl = 'http://192.168.29.150:8080';
const rtspUrls = [
  "rtmp://122.200.18.78/live/camone",
  "rtmp://122.200.18.78/live/camtwo",
  "rtmp://122.200.18.78/live/abc",
  "rtmp://122.200.18.78/live/camthree",
  "rtmp://122.200.18.78/live/camtwo",
  "rtmp://122.200.18.78/live/camtwo",
  "rtmp://122.200.18.78/live/camtwo",
];

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.get('/stream', (req, res) => {
  // Create the WebSocket streams only if they don't exist
  if (streams.length === 0) {
    rtspUrls.forEach((url, index) => {
      const stream = new Stream({
        name: `Camera Stream ${index + 1}`,
        streamUrl: url,
        wsPort: 9999 + index
      });
      streams.push(stream);
    });
  }

  res.send('Streaming started');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
