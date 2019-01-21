const router = require('express').Router()
const userController = require('../../controllers/user/userController')

//**** API v1 USER ROUTES ****//
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)

module.exports = router