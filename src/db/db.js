import mongoose from "mongoose";
import config from "..//config/config.js";

function connectDB(){
    mongoose.connect(config.MONGODB_URI)
    .then(()=>{
        console.log("database connected successfully");
    })
    .catch((err)=>{
        console.log("error in connecting",err)
    })
}
export default connectDB;