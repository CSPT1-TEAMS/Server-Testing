const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String
    } 
})

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 11, (err, hash) => {
        if (err) { 
            return next(err) 
        } else {
            this.password = hash;
            return next()
        }
    })
})

module.exports = mongoose.model('User', userSchema)