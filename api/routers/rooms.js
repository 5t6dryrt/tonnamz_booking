
import express from "express";
const router = express.Router();
import hotel from "../models/hotel.js"
import {createRoom,updateRoomAvailability,updateRoom,deleteRoom,getRoom,getRooms} from "../controllers/room.js"
import { verifyAdmin,verifyUser } from "../utils/verifyToken.js";
//create


router.post('/:hotelid',verifyAdmin,createRoom)

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);
export default router