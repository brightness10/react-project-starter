const express = require('express')
const app = express()
const api = require('./server/routes/api')
const path = require('path')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/CRM', {useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })  

app.use(express.static(path.join(__dirname, 'build')))
app.use('/', api)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4000
app.listen(port, ()=>console.log('Server running on port ' + port))