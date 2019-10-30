const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  product_name: {
    type: String,
    require: true
  },
  quantity: {
    type: Number,
    default: 5
  },
  p_image: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    default: 0,
    require: true
  },
  sold: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Products', productSchema);
