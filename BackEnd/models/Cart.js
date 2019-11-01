const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products'
    }
  ]
});

module.exports = mongoose.model('Cart', CartSchema);
