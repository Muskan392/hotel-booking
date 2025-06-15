import express from 'express';
import { protect } from '../middleware/authMiddleWare.js';
import { registerHotel } from '../controller/hotelController.js';

const hotelRouter = express.Router();

hotelRouter.post('/',protect,registerHotel);
export default hotelRouter;
// This route is for registering a new hotel. It requires authentication via the protect middleware.
// The registerHotel function handles the logic for registering a hotel, including checking if the user is already registered as a hotel owner and updating the user's role if successful.
// The hotelRouter is then exported for use in the main server file or other parts of the application.
// This code sets up a route for registering hotels in an Express application, ensuring that only authenticated users can register a hotel.
// The route is protected by the `protect` middleware, which checks if the user is authenticated before allowing them to register a hotel.
// The `registerHotel` function handles the logic for registering a hotel, including checking if the user is already registered as a hotel owner and updating the user's role if successful.
// The `hotelRouter` is then exported for use in the main server file or other parts of the application.
// This code sets up a route for registering hotels in an Express application, ensuring that only authenticated users can register a hotel.     
