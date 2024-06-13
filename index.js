const express = require('express')
const http = require('http')
const Server = require("socket.io").Server

const cuServer = express()

const server = http.createServer(cuServer)
const io = new Server(server,{
    cors:{
        origin:"*"
    }
})


io.on("connection",(socket)=>{
    console.log("we are connected")

    socket.on('chat',chat=>{
        io.emit('chat',chat)
    })

    socket.on('disconnect',()=>{
        console.log("Disconnected")
    })
})

const PORT = 3001 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`Chat Up Server started at ${PORT}`);
})
