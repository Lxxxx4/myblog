const express = require('express')
const User = require('../controller/userController')

const router = express.Router()

router.post('/reg', User.register)
router.post('/login', User.login)

module.exports = router