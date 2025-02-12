import User from "../models/user.model.js";
import Message from "../models/message.model.js"
export const getUsersForSidebar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.error("Error in getUsersForSidebar ", error.message);
        res.status(500).json({message: "Internal Server Error"}); 
    }
};

export const getMessages = async(req,res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const messages = await Message.find({
            $or: [
                {senderId: senderId, receiverId:userToChatId},
                {senderId: userToChatId, receiverId: senderId}
            ]
        })
    } catch (error) {
        
    }
};
