from flask import Flask, Response
import cv2

app = Flask(__name__)

# RTSP URL of the stream
RTSP_URL = 'http://192.168.29.150:8080'


def generate_frames():
    """Generator function to capture frames from the RTSP stream."""
    cap = cv2.VideoCapture(RTSP_URL)
    if not cap.isOpened():
        print("Error: Unable to open RTSP stream")
        return
    
    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                print("Error: Failed to read frame from RTSP stream")
                break
            else:
                # Encode the frame to JPEG format
                ret, buffer = cv2.imencode('.jpg', frame)
                if not ret:
                    print("Error: Failed to encode frame")
                    break
                else:
                    # Yield the frame as bytes
                    yield (b'--frame\r\n'
                           b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')
    finally:
        cap.release()

@app.route('/video_feed')
def video_feed():
    """Route to stream the RTSP video."""
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)