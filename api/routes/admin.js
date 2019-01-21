const router = require('express').Router()
const adminController = require('../controllers/adminController')

//**** API v1 ADMIN ROUTES ****//
router.get('/user/:id/permissions', adminController.getPermissions)
router.post('/user/:id/permissions', adminController.setPermissions)

module.exports = router