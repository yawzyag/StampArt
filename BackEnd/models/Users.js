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
    type: String
  },
  user_avatar: {
    type: String
  },
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  status: {
    type: String,
    default: 'inactive'
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'
  }],
  cart_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart'
  }
});

module.exports = mongoose.model('Users', userSchema);
