// import User from "../models/user.js";
 
// //Middleware to check if user is authenticated

// export const protect = async (req, res, next) => {
//     const {userId}=req.auth;
//     if(!userId) {
//         return res.json({ success:false, message: "Not authorized, no user found" });
//     }
//     else{
//         const user = await User.findById(userId );
//         req.user = user;
//         next();
//     }
// }


import User from "../models/user.js";

export const protect = async (req, res, next) => {
    const { userId } = req.auth || {};  // ✅ Safe destructuring
    console.log("req.auth =>", req.auth);


    if (!userId) {
        return res.status(401).json({ success: false, message: "Not authorized, no user found" });
    }

    try {
        const user = await User.findOne({clerkId:userId});
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}
