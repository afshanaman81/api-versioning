const router = require('express').Router()

//**** API version 1 ****//
router.use('/', require('./routes/admin'))
router.use('/', require('./routes/user'))

module.exports = router