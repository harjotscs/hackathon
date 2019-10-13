const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')

//load user model
const User = require('../models/userLogin')

module.exports = (passport) => {
    passport.use(new LocalStrategy({usernameField:'email'}, (email, password, done) => {
       //match USer
       User.findOne({email:email})
       .then(user => {
           if(!user){
            return done(null, false)
           }
          //match passowrd
          bcrypt.compare(password, user.password, (err, isMatch) => {
              if(err) throw err
              if(isMatch) {
                  return done(null, user)
              } else {
                  return done(null, false)
              }
          })
       })
       .catch(err => console.log(err))
    }))
}


passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id,done){
    User.findById(id, function(err, user){
        done(err,user)
    })
})