import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkwebhooks from './controller/clerkWebhooks.js';

connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(clerkMiddleware());

//API to handle Clerk webhooks
app.use("/api/clerk",clerkwebhooks)

app.get('/', (req, res) => res.send('API is working fine!'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
   