const router = require('express').Router();
const placesApiController = require('../controllers/placesApiController');
const upload = require('../config/multer');


router.get('/atlas', placesApiController.index);

router.post('/places/new', upload.single('file'), placesApiController.new );

router.get('/places/:id', placesApiController.get );

router.put('/places/:id', placesApiController.edit );

router.delete('/places/:id', placesApiController.delete );

module.exports = router;
