const express = require('express');
const server = express();
const db = require('mongoose');
const User = require('./User');


// server.get('/', get);
// server.post('/', post);

server.get('/', (req, res) => {
    res.status(200).json({"api": "running"}).end()
})

const testUserData = {
    username: 'Lisa',
    password: '123'
} 

server.post('/', (req, res) => {
    const testUser = new User(req.body);

    testUser.save()
    .then( user => {
        console.log('RES', res)
        res.status(201).json(user);
      })
      .catch( err => {
        res.status(500).json({error: 'Error posting to database', err});
      })
})



module.exports = server