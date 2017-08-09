const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapsSchema = new Schema({
  title: { type: String },
  description: { type: String },
  wmsURL: { type: String },
  layer: { type: String },
  legendURL: { type: String }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Maps = mongoose.model('Maps', mapsSchema);
module.exports = Maps;
