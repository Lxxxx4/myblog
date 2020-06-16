const hotRankRouter = require('./hotRankRouter')
const userRouter = require('./userRouter')
const blogRouter = require('./blogRouter')
const mottoRouter = require('./mottoRouter')


module.exports = (app) => {
  app.use('/api/hotRank', hotRankRouter)
  app.use('/api/user', userRouter)
  app.use('/api/blog', blogRouter)
  app.use('/api/motto', mottoRouter)
}