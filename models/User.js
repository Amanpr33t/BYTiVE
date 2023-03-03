const mongoose= require('mongoose')

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    isLiked:{
        type:Boolean,
        default:false 
    },
    address:{
        street:{
            type:String
        },
        suite:{
            type:String
        },
        city:{
            type:String
        },
        zipcode:{
            type:String
        },
    },
    company:{
        name:{
            type:String
        }
    }
},{timestamps:true,toJSON:{virtuals:true},toObject:{virtuals:true}})



module.exports=  mongoose.model('User',UserSchema)