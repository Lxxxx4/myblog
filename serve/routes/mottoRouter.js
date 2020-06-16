const express = require('express')
const Motto = require('../controller/mottoController')

const router = express.Router()

router.post('/addMotto', Motto.addMotto)
router.get('/getMotto', Motto.getMotto)

module.exports = router