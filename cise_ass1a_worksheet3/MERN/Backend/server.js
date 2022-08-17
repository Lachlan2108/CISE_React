const express = require("express");

const server = express();

server.get('/', (req, res) =>{
    res.send("API is running")
})

server.listen(5000, console.log("server is working and listening PORT 5000"))