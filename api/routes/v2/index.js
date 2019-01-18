const router = require('express').Router();

//**** API version 2 Home ****//
router.get('/', (req, res) =>
  res.json('Welcome to API version 2. There are some awesome changes here!')
);

//**** API version 2 Routes ****//
router.use('/', require('../v2/user'));


//**** API version 1 Routes ****//
router.use('/', require('../v1/admin'));

module.exports = router;
