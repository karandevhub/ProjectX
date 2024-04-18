from fastapi import APIRouter, HTTPException, UploadFile, File
from models.schemas import *
from config.database import *
from bson import ObjectId

router = APIRouter()

@router.post("/users/")
def create_user(user: User):
    result = users_collection.insert_one(user.dict())
    return {"inserted_id": str(result.inserted_id)} 

@router.delete("/users/{username}")
def delete_user(username: str):
    # Search for the user document by username
    user = db.users_collection.find_one({"username": username})

    # If user is not found, raise a 404 Not Found error
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    # Use the found user's _id to delete the user document
    result = db.users_collection.delete_one({"_id": user["_id"]})

    # Check if a document was deleted
    if result.deleted_count == 0:
        # If no document was deleted, raise a 404 Not Found error
        raise HTTPException(status_code=404, detail="User not found")

    # Return a success message if the user was deleted
    return {"message": "User deleted successfully"}


@router.put("/users/{user_id}")
def update_user(user_id: str, user: User):
    result = db.users_collection.update_one({"_id": user_id}, {"$set": user.dict()})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User updated successfully"}

@router.post("/cameras/")
def create_camera(camera: Camera):
    result = cameras_collection.insert_one(camera.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.delete("/cameras/{camera_id}")
def delete_camera(camera_id: str):
    result = db.cameras_collection.delete_one({"_id": camera_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Camera not found")
    return {"message": "Camera deleted successfully"}

@router.put("/cameras/{camera_id}")
def update_camera(camera_id: str, camera: Camera):
    result = db.cameras_collection.update_one({"_id": camera_id}, {"$set": camera.dict()})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Camera not found")
    return {"message": "Camera updated successfully"}

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
    criminal_data = criminal.dict()
    criminal_data["face_image"] = image_data
    result = db.criminals_collection.insert_one(criminal_data)
    return {"inserted_id": str(result.inserted_id)}

@router.post("/evns/")
def create_dvr(evn: Evn):
    result = evns_collection.insert_one(evn.dict())
    return {"inserted_id": str(result.inserted_id)}

@router.post("/dvrs/")
def create_dvr(dvr: Dvr):
    result = dvrs_collection.insert_one(dvr.dict())
    return {"inserted_id": str(result.inserted_id)}