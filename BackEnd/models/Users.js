const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    require: true
  },
  direction: {
    type: String,
    required: true
  },
  user_avatar: {
    data: Buffer,
    contentType: String
  },
  username: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  products: {
      type: Array
  },
});

module.exports = mongoose.model('Users', userSchema);
