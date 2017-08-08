const User = require('../models/User');
// const Place = require('../models/Place');

module.exports = {
  get: (req, res, next) => {
    User.findById(req.params.id).then(user => {
        res.json(user);
      })
      .catch(e => res.json(e));
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
