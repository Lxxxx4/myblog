const jwt = require('jwt-simple')
const { SECRET } = require('../config/config')

const auth = (req, res, next) => {
  let authorization = req.headers['token']
  if (authorization) {
    // 解析token
    try { // 如果被篡改，就会无法解析报错
      let user = jwt.decode(authorization, SECRET)
      req.user = user
      next() // 取出token表示的内容 表示没有被篡改过
    } catch (e) {
      res.status(404).send('Not Allowed')
    }
  } else {
    res.status(404).send('Not Allowed')
  }
}
module.exports = auth