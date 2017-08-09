const User = require('../models/User');
const Place = require('../models/Place');
const FavoriteRelation = require('../models/FavoriteRelation');

module.exports = {

  get: (req, res, next) => {
    User.findById(req.params.id)
        .exec()
        .then(user => {
          Place.find({creatorId: user._id})
               .exec()
               .then(places => {
                 FavoriteRelation.find({
                     userId: user._id
                   })
                   .populate('placeId')
                   .exec()
                   .then(favorites => {
                     res.json({
                       user:user,
                       places: places,
                       favorites: favorites
                     });
                });
            });
        })
        .catch(e => next(e));
},

  edit: (req, res, next) => {
    const updates = {
      email: req.body.email,
      username: req.body.username,
    };
    User.findByIdAndUpdate(req.params.id, updates).then(user => {
        res.json(user);
      })
      .catch(e => res.json(e));
  },

  delete: (req, res, next) => {
    User.remove({
        _id: req.params.id
      }).then(() => {
        res.json({
          message: "User removed"
        });
      })
      .catch(e => res.json(e));
  }
};
