const express = require('express')
const db = require('./utils/db-connection')
const cors = require('cors')
const port = 3000

const app =express()

app.use(express.json())
app.use(cors())

const userRouter = require('./routes/userRoutes')
const busRouter = require('./routes/busRouter')
const bookingRouter = require('./routes/bookingRoutes')

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/user',userRouter)
app.use('/bus',busRouter)
app.use('/bookings',bookingRouter)


db.sync({alter:true})
.then(()=>{
    app.listen(port,()=>{
        console.log('server is listening...!')
    })
})
.catch((err)=>{
    console.log(err.message)
})
