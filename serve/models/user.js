const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  phone: Number,  //手机
  password: String //密码
})

const User = mongoose.model('user', userSchema)
module.exports = {
  User: User
}
