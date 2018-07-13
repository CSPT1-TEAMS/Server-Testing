const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: {
        type: String
    },
    ethnicity: {
        type: String,
        lowercase: true
    }
})

module.exports = mongoose.model('User', user)