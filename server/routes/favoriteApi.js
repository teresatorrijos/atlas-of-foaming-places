const router = require('express').Router();
const favoriteApiController = require('../controllers/favoriteApiController');


router.get('/user/:id', favoriteApiController.index);

module.exports = router;
