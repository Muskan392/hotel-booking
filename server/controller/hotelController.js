import Hotel from "../models/Hotel.js";
import User from "../models/user.js";


export const registerHotel = async (req, res) => {
    try{
        const {name,address,contact,city}=req.body;

        if (!req.user || !req.user._id) {
  return res.status(401).json({ success: false, message: "Unauthorized: User not found" });
}
const owner = req.user._id;

       
        //check if user is already registered as hotel owner

        const hotel=await Hotel.findOne({owner});

        if(hotel){
            return res.json({success:false,message:"You are already registered as a hotel owner"});
        }

        await Hotel.create({name,address,contact,city,owner});

        await User.findByIdAndUpdate(owner, { role: 'hotelOwner' });

        res.json({success:true,message:"Hotel registered successfully"});


    }catch(error){
        res.json({success:false,message:error.message});

    }
}