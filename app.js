const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const path = require('path')
const userRoutes = require('./routes/User')
const profileRoutes = require('./routes/profile')
const bodyParser = require('body-parser')
// const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const cors = require('cors')
const passport = require('passport')
const app = express()
const port = process.env.PORT || 3000

//connecting to database
mongoose.connect(keys.mongoDB.mongoURL, {useUnifiedTopology:true, useCreateIndex:true
,useFindAndModify:true, useNewUrlParser:true})
.then(() => console.log('connected to server'))
.catch((err) => console.log(err))


//enabling cors
app.use(cors())
//passport config
require('./config/passport')(passport)

//setting up body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


//session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  //passport
  app.use(passport.initialize())
  app.use(passport.session())
app.use(express.static(path.join(__dirname, './public')))
//setting up ejs engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')




//setting up routes
app.use('/user', userRoutes)
app.use('/profile', profileRoutes)




app.get('/', (req, res) => {
    res.render('hack1')
})

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null
  next()
})

app.get('/udacity', (req, res) => {
  res.render('ud')
})

app.get('/youtube', (req, res) => {
  res.render('y')
})

app.get('/udemy', (req, res) => {
  res.render('u')
})

app.get('/api', (req, res) => {
  res.render('api')
})

app.listen(port, () => console.log(`server is up on port ${port}`))