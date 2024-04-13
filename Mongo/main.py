from fastapi import FastAPI
from routes.routes import router

app = FastAPI()

app.include_router(router)



# uri = "mongodb+srv://marcusmic01:n0iroy0S7lxcJot7@cluster0.m7bjabg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# # Create a new client and connect to the server
# client = MongoClient(uri, server_api=ServerApi('1'))

# # Send a ping to confirm a successful connection
# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)