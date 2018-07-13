const express = require('express')
const server = express()
server.use(express.json())
const User = require('./userModel');


server.get('/Home', (req, res) => {
    res.status(200).json( {"Server": "You're in it!"} )
});


server.post('/user', (req, res) => {
    User.create()
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })

})

server.get('/user',(req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json(err)
        })
 });
  

module.exports = server