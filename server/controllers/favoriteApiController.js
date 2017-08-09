var express = require('express');
const User = require('../models/User');
const Place = require('../models/Place');
const FavoriteRelation = require('../models/FavoriteRelation');


module.exports = {

  new: (req, res, next) => {

    const newFavorite = new FavoriteRelation({
      userId: req.body.userId,
      placeId: req.body.placeId,
    });
    console.log(newFavorite);
    newFavorite.save().then(newFavorite => {
        res.status(201).json({
          message: 'New favorite created!',
          id: newFavorite._id
        });
      })
      .catch(e => res.json(e));
  },

  list: (req, res) => {
    FavoriteRelation.find({ placeId: req.params.placeId })
      .populate('userId').exec()
      .then( users => {
        res.json(users);
      }).catch( errore => res.json(errore));
  }

};
