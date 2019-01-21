const router = require('express').Router()

//**** API version 1 Home ****//
router.get('/', (req, res) => res.json("Welcome to API version 1"))

//**** API version 1 Routes ****//
router.use('/', require('./user'))
router.use('/', require('./admin'))

module.exports = router