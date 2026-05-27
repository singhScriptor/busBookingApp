const booking = require('../models/bookingTable')

const postBooking = async (req,res)=>{
    try{
        const {seatNumber,userId,busId} = req.body
        const newBooking = await booking.create({seatNumber,userId,busId})
        res.json(newBooking)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}

const getBooking = async(req,res)=>{
    try{
        const {id}= req.params
        const findBooking = await booking.findByPk(id)
        if(findBooking){
            res.json(findBooking)
        }
        else{
            res.status(404).json({message: 'not found'})
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const getBookingByUser=async(req,res)=>{
    try{
        const {id}= req.params
        const bookings  = await booking.findAll({where : {userId : id}})
        if(bookings){
            res.json(bookings)
        }
        else{
            res.status(404).json({message:'not found'})
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

const getBookingByBus = async(req,res)=>{
    try{
        const {id} = req.params
        const bookings = await booking.findAll({where : {busId:id}})
        if(bookings){
            res.json(bookings)
        }
        else{
            res.status(404).json({message: 'not found'})
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}


module.exports ={
    postBooking,
    getBooking,
    getBookingByUser,
    getBookingByBus
}
