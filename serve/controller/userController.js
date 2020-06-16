const { User } = require('../models/user')
const jwt = require('jwt-simple')
const { SECRET } = require('../config/config')

// 用户注册
async function register (req, res, next) {
  let params = req.body 
  try {
    // 添加以后返回的结果
    let user = await User.create(params)
    res.json({
      code: 0,
      data: {
        user: {id: user._id, phone: user.phone}
      },
      msg: '注册成功'
    })

  } catch (e) {
    res.json({
      code: 1,
      msg: '注册失败'
    })
  }
}
// 用户登录
async function login (req, res, next) {
  let params = req.body
  let user = await User.findOne(params)
  console.log(user)
  if (user) {
    // 用户存在，返回登录成功
    let token = jwt.encode({
      id: user._id,
      phone: user.phone,
      password: user.password
    }, SECRET)
    res.json({
      code: 0,
      data: {
        token
      }
    })
  } else {
    res.json({
      code: 1,
      msg: '用户不存在'
    })
  }
}

module.exports = {
  register: register,
  login: login
}