const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContentSchema = new Schema({
  text: {
    type: String,
  },
  sentiment: {
    type: String,
  },
  image_url: {
    type: String,
  },
});

module.exports = Content = mongoose.model('content', ContentSchema);