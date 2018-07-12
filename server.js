const express = require('express');
const server = express();

//create is a post


server.get('/', (req, res) => {
    res.status(200).end()
})

// to create
server.post('/', (req, res) => {
    res.status(200).json({"something": "json"}).end()
    //
})

server.delete('/', (req, res) => {
    res.status(202).end()
})

module.exports = server;