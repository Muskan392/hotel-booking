import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import clerkwebhooks from './controller/clerkWebhooks.js';

connectDB();

const app = express();
app.use(cors());

app.post("/api/clerk", express.raw({ type: 'application/json' }),clerkwebhooks)


app.use(express.json());

app.get('/', (req, res) => res.send('API is working fine!'));

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));