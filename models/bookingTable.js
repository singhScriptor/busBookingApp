const { DataTypes }= require('sequelize')

const sequelize = require('../utils/db-connection')

const booking = sequelize.define('booking',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    busId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
        seatNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = booking