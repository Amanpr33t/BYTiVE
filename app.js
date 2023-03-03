const express = require('express')
const app= express()
app.use(express.static('./public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const connectDB= require('./db/connect')
const port=  7000
const mongoose= require('mongoose')
mongoose.set('strictQuery', true)
require('dotenv').config()
const errorHandlerMiddleware=require('./middleware/errorHandlerMiddleware')
const notFound=require('./middleware/notFound')
const userRouter= require('./routes/userRouter')
const cors= require('cors')
app.use(cors())


app.use('/user',userRouter)
app.use(notFound)
app.use(errorHandlerMiddleware)


const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server running on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}
 start()  


