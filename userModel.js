const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: {
        type: String
    },
    race: {
        type: String,
        lowercase: true
    }
})

module.exports = mongoose.model('User', user)