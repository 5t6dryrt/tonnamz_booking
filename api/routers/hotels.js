
import express from "express";
import Hotel from "../models/hotel.js"
import {createError } from "../utils/error.js"
import { updateHotel,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType 
  } from "../controllers/hotel.js"

import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();
//create
router.post('/',verifyAdmin,createHotel);
//get
router.get('find/:id',getHotel)
//get all
router.get('/',getHotels)
router.get('/countByCity',countByCity)
router.get('/countByType',countByType)
//update
router.put('/:id',verifyAdmin,updateHotel)

//delete

router.delete('/:id',verifyAdmin,deleteHotel)




export default router