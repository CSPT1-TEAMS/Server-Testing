const express = require('express')
const server = express()

server.get('/Home', (req, res) => {
    res.status(200).json( {"Server": "You're in it!"} )
})

// server.get('/user', function(req, res) {
//     res.status(200).json({ name: 'Alexis' });
//   });
  

module.exports = server