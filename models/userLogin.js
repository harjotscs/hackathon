const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String
    }, 
    email :{
        type: String
    }, 

    password: {
        type: String
    },
    password2 :{
        type: String
    }
})

const User = mongoose.model('hackthonUsers', userSchema)

module.exports = User