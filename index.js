const express = require('express')
const cors = require('cors')
const route = require('./router')

const server = express()
server.use(cors())
server.use(express.json())
server.use(route)

const PORT = 3000
server.listen(PORT,()=>{
    console.log("Server is running..");
})
server.get('/',(req,res)=>{
    res.send('Server is running...')
})

