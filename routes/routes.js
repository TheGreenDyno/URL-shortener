const express = require('express')
const router = express.Router()
const { createPost, handleRedirect } = require('../controller/urlcontroller')


router.post('/', createPost)
router.get('/:shortId', handleRedirect)

module.exports = router