import User from "../models/user.js";
import { Webhook } from "svix";

const clerkwebhooks=async(req, res) => {
    try{
        const whook=new webhook(process.env.CLERK_WEBHOOK_SECRET);

        const headers={
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        };

        //verify the webhook

        await whook.verify(JSON.stringify(req.body), headers);
        //getting data
        const {data,type} = req.body;

        const userData={
            _id: data.id,
            username: data.first_name + " " + data.last_name,
            email: data.email_addresses[0].email_address,
            image: data.image_url,
           
        }

        //switch case for different webhook types
        switch(type){
            case "user.created":
              await User.create(userData);
             break;

            case "user.updated":
              
                await User.findByIdAndUpdate(data.id, userData);
                break;

            case "user.deleted":
               
                await User.findByIdAndDelete(data.id);
                break;

            default:
               break;
        }
        res.json({
            success: true,message:"Webhook processed successfully"})

    } catch(error){
        console.log("Error processing webhook:", error.message);
        res.json({
            success: false,
            message: "Error processing webhook",
            error: error.message
        });
        

    }
}

export default clerkwebhooks;