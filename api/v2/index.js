const router = require('express').Router()

//**** API version 2 ****//
router.use('/', require('./routes/user'))


//**** API version 1 ****//
router.use('/', require('../v1/routes/admin'))

module.exports = router