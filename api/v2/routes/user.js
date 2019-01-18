const router = require('express').Router()
const userCtrlV1 = require('../../v1/controllers/userController')
const userCtrlV2 = require('../controllers/userController')

//**** API v2 USER ROUTES ****//
router.get('/user', userCtrlV2.getUsers)

//**** API v1 USER ROUTES ****//
router.get('/user/:id', userCtrlV1.getUser)

module.exports = router