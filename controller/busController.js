const bus = require('../models/busTable')

const postBus = async (req,res)=>{
    try{
        const {busNumber,totalSeats,availableSeats} = req.body
        const newBus = await bus.create({busNumber,totalSeats,availableSeats})
        res.json(newBus)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const getBus = async(req,res)=>{
    try{
        const {id} = req.params
        const findBus = await bus.findByPk(id)
        if(findBus){
            res.json(findBus)
        }
        else{
            res.status(404).json({message: 'not found'})
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    postBus,
    getBus
}