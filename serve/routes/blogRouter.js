const express = require('express')
const multer  = require('multer')
const Blog = require('../controller/blogController')
const upload = multer({ dest: 'uploads/' })

const router = express.Router()

router.post('/addBlog', upload.single('file'), Blog.addBlog)
router.get('/getBlogs', Blog.getBlogs)

module.exports = router