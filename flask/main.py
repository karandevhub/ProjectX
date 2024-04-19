from typing import Union
from enum import Enum
from fastapi import FastAPI, Query, Form, File, UploadFile, HTTPException, WebSocket
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
import cv2
import base64
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

cap = cv2.VideoCapture("rtmp://122.200.18.78/live/abc")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class choice_names(str, Enum):
    one = "one"
    two = "two"
    three = "three"


class schema(BaseModel):
    name: str
    Class: str
    roll_no: int


# routings

@app.get("/")
def read_root():
    return {"Hello": "World"}


# parameters

@app.get("/item/{Item}")
def path_fubction(Item):
    return {"path Item": Item}

# query parameters


@app.get("/query/")
def query_function(name: str, roll_no: Union[str, int] = '100'):
    return {"name": name, "roll_no": roll_no}


# query parameter with validation
@app.get("/query2")
def query_function2(name: str, roll_no: Union[str, None] = Query(default=None, min_length=4, max_length=5)):
    return {"name": name, "roll_no": roll_no}


# options

@app.get("/choice/{model_name}")
def query_function(model_name: choice_names):
    if model_name.value == 'one':
        return {"model_name": model_name, "message": "calling one!!"}
    if model_name.value == 'two':
        return {"model_name": model_name, "message": "calling two!!"}
    else:
        return {"model_name": model_name, "message": "calling three!!"}

    # request body(import basemodel-> schema)


@app.post("/items/")
async def create_item(item: schema):
    return {"item": item}

# form data


@app.post("/formdata/")
async def form_data(username: str = Form()):
    return {"username": username}

# file upload


@app.post("/upload/size/")
async def file_size(file: bytes = File()):
    return {"file": len(file)}


@app.post("/file/data/")
async def upload_file(file: UploadFile):
    return ({"file": file})


@app.post("/file/data/form")
async def formdata_upload_file(file: UploadFile, file2: bytes = File(), name: str = Form()):
    return ({"file": file, "file2": len(file2), "name": name})


# Error handling

@app.get("/error/handling")
async def http_exception_handler(item: int):
    if item == 2:
        return HTTPException(status_code=400, detail="Item is not equal to 2 ")
    return {"value": item}


async def video_stream(websocket: WebSocket, rtmp_url: str):
    cap = cv2.VideoCapture(rtmp_url)

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            print("Error reading frame from video stream.")
            break

        # Convert frame to base64
        ret, buffer = cv2.imencode('.jpg', frame)
        if not ret:
            print("Error encoding frame to JPEG.")
            continue

        frame_as_bytes = base64.b64encode(buffer)

        # Send frame to frontend
        try:
            await websocket.send_text(frame_as_bytes.decode('utf-8'))
        except Exception as e:
            print(f"Error sending frame to frontend: {e}")
            break

    cap.release()

@app.websocket("/stream")
async def websocket_endpoint(websocket: WebSocket):
    try:
        await websocket.accept()

        # Replace 'YOUR_RTMP_URL' with your actual RTMP URL
        await video_stream(websocket, "rtmp://122.200.18.78/live/xyz")
    except Exception as e:
        print(f"Error in WebSocket endpoint: {e}")