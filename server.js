const express = require('express')
const server = express()
server.use(express.json())
const User = require('./userModel');


server.get('/', (req, res) => {
    res.status(200).json( {"Server": "You're in it!"} ).end()
});

// server.post('/', (req, res) => {
//     User.create(req.body)
//     .then(user => {
//         console.log(user)
//         res.status(204).json(user)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })

// })

// server.get('/user', function(req, res) {
//     res.status(200).json({ name: 'Alexis' });
//  });
  

module.exports = server