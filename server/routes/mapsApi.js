const router = require('express').Router();
const mapApiController = require('../controllers/mapApiController');

router.get('/allmaps', mapApiController.list);

module.exports = router;
