const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
});

module.exports = User = mongoose.model('users', UserSchema);