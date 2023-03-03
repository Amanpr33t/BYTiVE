
const User=require('../models/User')
const getUsers=async(req,res)=>{
    
    try {
        const users=await User.find({})
        res.status(200).json({status:'ok',num_Of_Users:users.length,users}) 
    } catch (error) {
        console.log(error)
    }
   
}
module.exports=getUsers