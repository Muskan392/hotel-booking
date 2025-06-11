import express from "express";
import clerkwebhooks  from "../controller/clerkWebhooks.js"; // Import the controller function

const router = express.Router();

// Clerk webhook expects POST, not GET
router.post("/", clerkwebhooks);

export default router;
