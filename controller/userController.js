const { error } = require('node:console')
const { booking } = require('../models')
const user =require('../models/userTable')
// const bus = require('../models/busTable')
// const booking = require('../models/bookingTable')

const postUser = async(req,res)=>{
    try{
        const {name,email} = req.body
        const newUser = await user.create({name,email})
        res.status(201).json(newUser)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}
const getUser = async(req,res)=>{
    try{
        const {id} = req.params
        const foundUser =await user.findByPk(id)
        if(foundUser){
            res.json(foundUser)
        }
        else{
            res.status(404).json({message:'not found'})
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}


module.exports = {
    postUser,
    getUser
}


