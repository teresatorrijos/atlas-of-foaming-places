const router = require('express').Router();
const usersApiController = require('../controllers/usersApiController');


router.get('/user/:id', usersApiController.get);

router.put('/user/:id', usersApiController.edit);

router.delete('/user/:id', usersApiController.delete);

module.exports = router;
