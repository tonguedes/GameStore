import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/hands-on-backend") 

let db = mongoose.connection

export default db;