const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  pdescription: String,
  creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  location: { type: { type: String }, coordinates: [Number] },
  picPath: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
