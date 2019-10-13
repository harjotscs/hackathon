const mongoose = require('mongoose')
const profileSchema = new mongoose.Schema({
    idea :{
        type:String
    },

    title: {
        type: String
    }
})

const Profile = mongoose.model('feedback', profileSchema)

module.exports = Profile