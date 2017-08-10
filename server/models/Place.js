const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  pdescription: { type:String},
  creatorId: {
     type: Schema.Types.ObjectId,
     ref: 'User'
   },
  localizacion: {
     type: Array,
     default: []
   },
   locateDegree: { type: String},
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

placeSchema.set('toJSON', { virtuals: true });
placeSchema.virtual('imageURL').get(function() {
  if(this.pic_path.includes('http')){
    return this.pic_path;
  }
  return `${process.env.HOST}${this.pic_path}`;
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
