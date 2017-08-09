const router = require('express').Router();
const favoriteApiController = require('../controllers/favoriteApiController');


router.post('/', favoriteApiController.new);


module.exports = router;
