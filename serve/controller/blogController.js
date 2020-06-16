const path = require('path')
const fs = require('fs')
const util = require('util')
const { Blog } = require('../models/blog')


const readFile = util.promisify(fs.readFile);
// 添加博客
function addBlog(req, res) {
  const filePath = path.join(path.resolve('./'), req.file.path)
  const blogTitle = req.body.title
  const blogProfile = req.body.profile
  const type = req.body.type
  readFile(filePath, 'utf8').then(async data => {
    let params = {
      title: blogTitle,
      profile: blogProfile,
      type: type,
      content: data
    }
    try {
      await Blog.create(params)
      res.json({
        code: 0,
        msg: '添加成功'
      })
  
    } catch (e) {
      res.json({
        code: 1,
        msg: '添加失败'
      })
    }
    
  }).catch(err =>{
    console.log(err)
  })
}

function getBlogs(req, res) {
  const type = parseInt(req.query.type)
  if (type) {
    Blog.find({'type': type}, function(err, ret) {
      if(err) {
        res.json({
          code: 1,
          msg: err
        })
      } else {
        res.json({
          code: 0,
          data: ret,
          msg: '查询成功'
        })
      }
    })
  } else {
    Blog.find(function(err,ret) {
      if(err){
        res.json({
          code: 1,
          msg: err
        })
      } else {
        res.json({
          code: 0,
          data: ret,
          msg: '查询成功'
        })
      }
    })
  }
}

module.exports = {
  addBlog: addBlog,
  getBlogs: getBlogs
}