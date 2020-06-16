const express = require('express')
const hotRank = require('../controller/hotRankController')

const router = express.Router()

router.get('/weibo', hotRank.hotRank_weibo)
router.get('/juejin', hotRank.hotRank_juejin)
router.get('/segmentfault', hotRank.hotRank_segmentfault)

module.exports = router