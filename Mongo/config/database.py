from pymongo import MongoClient
client = MongoClient("mongodb+srv://marcusmic01:n0iroy0S7lxcJot7@cluster0.m7bjabg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db = client.Intelligent_Camera

users_collection = db["users"]
cameras_collection = db["cameras"]
locations_collection = db["locations"]
events_collection = db["events"]
objects_collection = db["objects"]
properties_collection = db["properties"]
criminals_collection = db["criminals"]
dvrs_collection = db["dvrs"]
evns_collection = db["evns"]