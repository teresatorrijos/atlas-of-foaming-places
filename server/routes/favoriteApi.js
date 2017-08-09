const router = require('express').Router();
const favoriteApiController = require('../controllers/favoriteApiController');

router.post('/', favoriteApiController.new);

router.get('/favorites/:placeId', favoriteApiController.list);

module.exports = router;
