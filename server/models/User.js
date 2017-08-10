const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  pic_path: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.set('toJSON', { virtuals: true });
userSchema.virtual('imageURL').get(function() {
  if(this.pic_path.includes('http')){
    return this.pic_path;
  }
  return `${process.env.HOST}${this.pic_path}`;
});

const User = mongoose.model('User', userSchema);
module.exports = User;
