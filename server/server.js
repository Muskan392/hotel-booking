import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import clerkwebhooks from './controller/clerkWebhooks.js';
import userRouter from './routes/userRoute.js';
import hotelRouter from './routes/hotelRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

connectDB();
connectCloudinary

const app = express();
app.use(cors());

app.post("/api/clerk", express.raw({ type: 'application/json' }),clerkwebhooks)


app.use(express.json());
app.use(ClerkExpressWithAuth());


app.get('/', (req, res) => res.send('API is working fine!'));

app.use('/api/user',userRouter);
app.use('/api/hotels',hotelRouter);
app.use('/api/rooms',roomRouter)
app.use('/api/bookins',bookingRouter)

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));