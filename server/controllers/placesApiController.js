const User = require('../models/User');
const Place = require('../models/Place');

module.exports = {
  /* GET places listing */
  index: (req,res,next) => {
    Place.find({}).then(places =>{
      res.json(places);
    })
    .catch( e => res.json(e));
},

  /* POST new event */
  new: (req, res, next) => {
  const place = new Place ({
    pdescription: req.body.pdescription,
    // location: req.body.location,
    creatorId: req.user._id,
    picPath: (req.file) ? `/place-uploads/${req.file.filename}` : '/images/default.png'
  });
  place.save().then(place => {
			res.status(201).json({
        message: 'New place created!',
        id: place._id,
        location: event.location
      });
	})
  .catch( e => res.json(e));
},

/* GET a single event */
get: (req,res,next) => {
    Place.findById(req.params.id).then(place =>{
      res.json(place);
    })
    .catch( e => res.json(e));
},

/* EDIT a single event */
edit: (req,res,next) => {
  const updates = {
     pdescription: req.body.pdescription,
   };
    Place.findByIdAndUpdate(req.params.id, updates).then(place =>{
      res.json(place);
    })
    .catch( e => res.json(e));
},

/* DELETE a single event */
delete: (req,res,next) => {
    Place.remove({ _id: req.params.id }).then( () =>{
      res.json({
        message:"Place removed"
      });
    })
    .catch( e => res.json(e));
}

};
