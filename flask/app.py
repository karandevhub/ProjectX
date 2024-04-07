from flask import Flask, Response
import cv2

app = Flask(__name__)

# RTSP URL of the stream
RTSP_URL = 'rtsp://0.tcp.in.ngrok.io:13770//h264_ulaw.sdp'

def generate_frames():
    """Generator function to capture frames from the RTSP stream."""
    cap = cv2.VideoCapture(RTSP_URL)
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        else:
            # Encode the frame to JPEG format
            ret, buffer = cv2.imencode('.jpg', frame)
            if not ret:
                break
            else:
                # Yield the frame as bytes
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')

    cap.release()

@app.route('/video_feed')
def video_feed():
    """Route to stream the RTSP video."""
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)

