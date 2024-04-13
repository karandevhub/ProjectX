const express = require('express');
const Stream = require('node-rtsp-stream');
const cors = require('cors');

const app = express();
const port = 4000;
let streams = [];
const IP_ADDRESS = '34.93.193.135';

const rtspUrls = [
  "rtmp://122.200.18.78/live/camone",
  "rtmp://122.200.18.78/live/camtwo",
  "rtmp://122.200.18.78/live/abc",
  "rtmp://122.200.18.78/live/camfive",
  "rtmp://122.200.18.78/live/camsix",

];

app.use(
  cors({
    origin: "http://34.93.193.135:5173",
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

app.listen(port, IP_ADDRESS, () => {
  console.log(`Server running at http://${IP_ADDRESS}:${port}/`);
});