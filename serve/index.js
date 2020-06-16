const config = require('./config/config')
const express = require('express')
const bodyParser = require('body-parser')
const Router = require('./routes/index')
require('./dbase')
const app = new express()

app.use(bodyParser.json())
app.use(express.static('public'))
Router(app)

app.listen(config.PORT,(err)=>{
  if(err){
      console.error(err)
  }else{
      console.log(`open http://${config.HOST}:${config.PORT} in a browser to view the app`)
  }
})
