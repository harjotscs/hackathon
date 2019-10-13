const express = require('express')
const router = express.Router()
const User = require('../models/userLogin')
const passport = require('passport')
const Profile = require('../models/profile')

//feedback post route
router.post('/idea', (req,res) => {
    const post = new Profile({
        title: req.body.title,
        idea: req.body.idea
    })

    post.save().then(data => res.redirect('/'))
    .catch(err => console.log(err))
})


router.get('/idea', (req, res) => {
    res.render('dashboard')
})
//feedback get route
router.get('/post', (req, res) => {
    Profile.find({})
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

module.exports = router