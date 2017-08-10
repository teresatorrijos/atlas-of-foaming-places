var express = require('express');
const User = require('../models/User');
const Place = require('../models/Place');
const upload = require('../config/multer');

module.exports = {

  index: (req, res, next) => {
    Place.find({}).then(places => {
        res.json(places);
      })
      .catch(e => res.json(e));
  },

  new: (req, res, next) => {
    console.log('resolving types');
    console.log(req.body);
    const place = new Place({
      pdescription: req.body.pdescription || '',
      locateDegree: req.body.locateDegree || '',
      localizacion: JSON.parse(req.body.localizacion) || [],
      creatorId: req.user._id,
      tags: JSON.parse(req.body.tags) || [],
      pic_path: `/uploads/${req.file.filename}` || '',
    });
    console.log(place);
    place.save().then(place => {
        res.status(201).json({
          message: 'New place created!',
          id: place._id
        });
      })
      .catch(e => res.json(e));
  },

  get: (req, res, next) => {
    Place.findById(req.params.id).then(place => {
        res.json(place);
      })
      .catch(e => res.json(e));
  },

  edit: (req, res, next) => {
    const updates = {
      pdescription: req.body.pdescription,
    };
    Place.findByIdAndUpdate(req.params.id, updates).then(place => {
        res.json(place);
      })
      .catch(e => res.json(e));
  },

  delete: (req, res, next) => {
    Place.remove({
        _id: req.params.id
      }).then(() => {
        res.json({
          message: "Place removed"
        });
      })
      .catch(e => res.json(e));
  }

};
