const express = require('express');
const server = express()
const mongoose = require('mongoose')
const port = 5000
const User = require('./user')
server.listen(port, () => {
  return console.log(`server running on port ${port}`)
})
mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true }, () => {
    return console.log('mongo spun up')
})

server.get('/', (req, res) => {
  res.status(200).json({'dBStatus': 'connected'})
})

server.post('/user', (req, res) => {
  const user = new User(req.body)
    .save()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(500).json(error)
    })
})

server.delete('/user', (req, res) => {
  const user = req.body
    .findOne(user)
    .remove()
    .then((user) => {
      res.status(204)
    })
    .catch((error) => {
      res.status(500).json(error)
    })
})
module.exports = server
