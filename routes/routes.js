const express = require('express')
const router = express.Router()
const { createPost, handleRedirect, handleHomepage } = require('../controller/urlcontroller')

router.get('/', handleHomepage)
router.post('/', createPost)
router.get('/:shortId', handleRedirect)


module.exports = router