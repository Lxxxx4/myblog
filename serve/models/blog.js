const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: String,    //标题
  profile: String,  //简介
  content: String,   //内容
  type: Number
})

const Blog = mongoose.model('blog', blogSchema)
module.exports = {
  Blog: Blog
}
