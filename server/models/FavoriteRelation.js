const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteRelationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  placeId: { type: Schema.Types.ObjectId, ref: 'Place' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const FavoriteRelation = mongoose.model('FavoriteRelation', favoriteRelationSchema);
module.exports = FavoriteRelation;
