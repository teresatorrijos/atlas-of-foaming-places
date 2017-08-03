const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followRelationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  followerID: { type: Schema.Types.ObjectId, ref: 'User', required: true }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const FollowRelation = mongoose.model('FollowRelation', followRelationSchema);
module.exports = FollowRelation;
