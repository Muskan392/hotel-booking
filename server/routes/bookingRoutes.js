import express from "express";
import { checkAvailabilityAPI, createBooking, getHotelBookings, getuserBookings } from "../controller/bookingController.js";
import { protect } from "../middleware/authMiddleWare.js";


const bookingRouter=express.Router();
bookingRouter.post('/check-availabilty',checkAvailabilityAPI);
bookingRouter.post('/book',protect,createBooking);
bookingRouter.get('/user',protect,getuserBookings);
bookingRouter.get('/hotel',protect,getHotelBookings);

export default bookingRouter;