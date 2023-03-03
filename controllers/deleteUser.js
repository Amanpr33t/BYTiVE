const CustomAPIError = require("../errors/custom-error")
const User=require('../models/User')
const deleteUser=async(req,res)=>{
    
    try {
        const user= await User.findOne({_id:req.body.userId})
        if(!user){
        res.status(404).json({status:'failure'})
        throw new CustomAPIError('No user with this id',404)
       }
        await User.findOneAndDelete({_id:req.body.userId})
        res.status(200).json({status:'ok'}) 
    } catch (error) {
        console.log(error)
    } 
}
module.exports=deleteUser