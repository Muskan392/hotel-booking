
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
//API to create a room

export const createRoom = async (req, res) => {
    try{

        const {roomType,pricePerNight,amenities}=req.body;
        const hotel=await Hotel.findOne({owner:req.auth.userId});

        if(!hotel){
            return res.json({success:false,message:"You are not registered as a hotel owner"});
        }
        //upload images to cloudinary
        const uploadedImages = req.files.map(async (file) => {
            const response=await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })

        const images=await Promise.all(uploadImages); 
            
        await Room.create({
            hotel: hotel._id,
            roomType,
            pricePerNight:+pricePerNight,
            amenities:JSON.parse(amenities),
            images
    
        }) 

        res.json({success:true,message:"Room created successfully"});
          
    

    }catch(error){
        res.json({success:false,message:error.message});

    }


}

//API to get all rooms of a hotel
export const getRooms = async (req, res) => {
    try{
        const rooms=await Room.find({isAvailable:true}).populate({
            path:'hotel',
            populate:{
                path:'owner',
                select:'image'

            }
        }).sort({createdAt:-1})
        res.json({success:true,rooms})

    }
    catch(error){
        res.json({success:false,message:error.message})

    }
   
}

//API to get room details for specific hotel
export const getOwnerRooms = async (req, res) => {
    try{
        const hotelData=await Hotel({owner:req.auth.userId  })
        const rooms=await Room.find({hotel:hotelData._id.toString()}).populate("hotel");
        res.json({success:true,rooms});

    }catch(error){
        res.json({success:false,message:error.message});

    }


}

//API to toggle room availability
export const toggleRoomAvailability = async (req, res) => {

    try{
        const {roomId}=req.body;
        const roomData=await Room.findById(roomId);
        roomData.isAvailable=!roomData.isAvailable;
        await roomData.save();
        res.json({success:true,message:"Room availability updated"});

    }catch(error){

        res.json({success:false,message:error.message});

    }
   
}