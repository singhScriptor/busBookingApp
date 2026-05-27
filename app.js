const express = require('express')
const db = require('./utils/db-connection')
const cors = require('cors')
const port = 3000

const app =express()

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('hello world')
})


db.sync({altter:true})
.then(()=>{
    app.listen(port,()=>{
        console.log('server is listening...!')
    })
})
.catch((err)=>{
    console.log(err.message)
})
