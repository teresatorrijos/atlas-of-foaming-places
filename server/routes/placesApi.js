const router = require('express').Router();
const placesApiController = require('../controllers/placesApiController');


router.get('/places', placesApiController.index);

router.post('/new', placesApiController.new );

router.get('/places/:id', placesApiController.get );

router.put('/places/:id', placesApiController.edit );

router.delete('/places/:id', placesApiController.delete );

module.exports = router;
