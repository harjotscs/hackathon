const express = require('express')
const route = express.Router()
const User = require('../models/userLogin')
const Post = require('../models/profile')
const bcrypt = require('bcryptjs')
const passport = require('passport')
//get route fro register
route.get('/register', (req, res) => {
    res.render('loginform')
})


//post route for register
route.post('/register', (req, res) => {
   
        User.findOne({email:req.body.email})
        .then(user => {
            if(user) {
               errors.push({msg:"User already found"})
            }
    
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                password2:req.body.password2
            })
    
            //hasing password
             bcrypt.genSalt(10, (err, salt) => {
                 bcrypt.hash(newUser.password, salt, (err,hash) => {
                     if(err) throw err;
                     newUser.password = hash
                     newUser.save()
                      .then(user => {
                          res.redirect('/user/login')
                      })
                      .catch(err => console.log(err))
                     
                 })
             })
        })
    }
   
)

//login in  user

route.get('/login', (req, res) => {
    res.render('login')
})

//login user
route.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect:'/user/home',
        failureRedirect:'/user/login'
    })(req, res, next)
})

route.get('/home',(req, res) => {
    res.render('hack2')
})


route.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})
//idea get route
route.get('/ideas', (req, res) => {
    res.render('type')
})

//idea post route
route.post('/ideas', (req, res) => {
    const post = new Post({
        title: req.body.title,
        idea:req.body.idea
    })

    post.save().then((data) => {
        res.redirect('/user/posts')
    }).catch(err => console.log(err))
})


const posts = Post.find({})
//getting all post in on place
route.get('/posts', (req,res) => {
    posts.exec((err, data) => {
        if(err) throw err
        res.render('post', {postData:data})
    })
})
module.exports = route
