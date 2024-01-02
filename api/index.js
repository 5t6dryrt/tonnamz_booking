import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routers/auth.js"
import hotelsRoute from "./routers/hotels.js"
import roomsRoute from "./routers/rooms.js"
import usersRoute from "./routers/users.js"
import { ReturnDocument } from "mongodb";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config()
app.use(cors())

const connect =  async() =>{
   try{
      await mongoose.connect(process.env.MONGO_URL);
      console.log("connect  mongo");
   }catch(err){
      throw(err);
   }

}

//middleware routes
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);

app.use((err, req, res, next) => {
   const errorStatus = err.status || 500;
   const errorMessage = err.message || "Something went wrong!";
   return res.status(errorStatus).json({
     success: false,
     status: errorStatus,
     message: errorMessage,
     stack: err.stack,
   });
 });

 

mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));

app.listen(3000,()=>{
   connect( )
   console.log('listening on port 3000')
})