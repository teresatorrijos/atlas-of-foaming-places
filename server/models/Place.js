const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  pdescription: { type:String},
  creatorId: {
     type: Schema.Types.ObjectId,
     ref: 'User'
   },
  localizacion: { type: String },
  pic_path: { type: String},
  tags: {
     type: Array,
     default: []
   }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
