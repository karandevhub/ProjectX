from pydantic import BaseModel
from typing import List, Optional

class User(BaseModel):
    username: str
    password: str
    user_type: str
    phone_no: int
    email: str
    address : str
    area : str

class Camera(BaseModel):
    location_id: str
    camera_no: int
    user_id: str
    status: str

class Location(BaseModel):
    location_name: str
    latitude: float
    longitude: float
    city: str
    state: str

class Event(BaseModel):
    event_name: str
    timestamp: int
    camera_id: str
    location_id: str
    threat_level: str
    criminal_id: str
    event_type: str
    status: str

class Object(BaseModel):
    location_id: str
    object_name: str
    Timestamp: int
    camera_id: str
    camera_type: str

class Property(BaseModel):
    object_id: str
    height: float
    color: str
    license_plate: str

class Criminal(BaseModel):
    name: str
    face_image: bytes

class Evn(BaseModel):
    dvr_id: str
    user_id: str

class Dvr(BaseModel):
    dvr_name: str
    description: str
    camera_id: str
