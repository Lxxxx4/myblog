const { Motto } = require('../models/motto')


// 添加博客
async function addMotto(req, res) {
  const params = req.body
  try {
    await Motto.create(params)
    res.json({
      code: 0,
      msg: '添加成功'
    })
  } catch(e) {
    res.json({
      code: 1,
      msg: e
    })
  }
}

function getMotto(req, res) {
  Motto.random(function(err, data) {
    if(err){
      res.json({
        code: 1,
        msg: err
      })
    } else {
      res.json({
        code: 0,
        data: data,
        msg: '查询成功'
      })
    }
  })
}

module.exports = {
  getMotto: getMotto,
  addMotto: addMotto
}