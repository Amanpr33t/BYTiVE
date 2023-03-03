const express= require('express')
const router= express.Router()
const uploadUsers= require('../controllers/uploadUsers')
const deleteUser=require('../controllers/deleteUser')
const getUsers=require('../controllers/getUsers')
const editUser= require('../controllers/editUser')

router.post('/uploadUsers',uploadUsers)
router.delete('/deleteUser',deleteUser)
router.get('/getUsers',getUsers)
router.patch('/editUser',editUser)

module.exports= router