from fastapi import APIRouter, HTTPException, UploadFile, File
from models.schemas import *
from config.database import *

router = APIRouter()

@router.post("/users/")
def create_user(user: User):
    result = users_collection.insert_one(user.dict())
    return {"inserted_id": str(result.inserted_id)} 

@router.post("/cameras/")
def create_camera(camera: Camera):
    result = cameras_collection.insert_one(camera.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.post("/locations/")
def create_anomaly(location: Location):
    result = locations_collection.insert_one(location.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.post("/events/")
def create_anomaly(event: Event):
    result = events_collection.insert_one(event.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.post("/objects/")
def create_criminal(object: Object):
    result = objects_collection.insert_one(object.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.post("/properties/")
def create_criminal(property: Property):
    result = properties_collection.insert_one(property.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.post("/criminals/")
async def create_criminal(criminal: Criminal, file: UploadFile = File(...)):
    image_data = await file.read()
    criminal.face_image = image_data
    result = db.criminals_collection.insert_one(criminal.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.post("/evns/")
def create_dvr(evn: Evn):
    result = evns_collection.insert_one(evn.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.post("/dvrs/")
def create_dvr(dvr: Dvr):
    result = dvrs_collection.insert_one(dvr.dict())
    return {"inserted_id": str(result.inserted_id)}