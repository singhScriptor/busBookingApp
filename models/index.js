const user =require('../models/userTable')
const bus = require('../models/busTable')
const booking = require('../models/bookingTable')


user.hasMany(booking,{foreignKey:'userId'})
booking.belongsTo(user,{foreignKey:'userId'})

bus.hasMany(booking,{foreignKey:'busId'})
booking.belongsTo(bus,{foreignKey:'busId'})

module.exports = {
     user,
     bus,
     booking
}