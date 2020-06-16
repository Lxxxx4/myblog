const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const mottoSchema = new Schema({
  content: String,   //内容
  'create-time': { type: Date, default: Date.now } //创建日期
})
mottoSchema.statics.random = function(callback) {
  this.count(function(err, count) { 
    if (err) { 
    return callback(err)
    } 
    const rand = Math.floor(Math.random() * count)
    this.findOne().skip(rand).exec(callback) 
  }.bind(this))
}

const Motto = mongoose.model('motto', mottoSchema)
module.exports = {
  Motto: Motto
}
