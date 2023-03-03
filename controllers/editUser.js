const CustomAPIError = require("../errors/custom-error")
const User=require('../models/User')
const editUser=async(req,res)=>{
    
    try {
        const {userId,name,email,phone,website}=req.body
        if(name.trim()==='' || email.trim()==='' || phone.trim()==='' || website.trim()===''){
            res.status(400).json({status:'failure',msg:'Enter all the values'})
            throw new CustomAPIError('All values not provided by the user',400)
        }
        const user= await User.findOne({_id:userId})
        if(!user){
            res.status(400).json({status:'failure'})
            throw new CustomAPIError('No user of this id exists',400)
        }
        await User.findOneAndUpdate({
            _id:userId
        },
        {name,email,phone,website},
        {new:true,runValidators:true}) 
        res.status(200).json({status:'ok'})
    } catch (error) {
        console.log(error)
    }
   
}
module.exports=editUser