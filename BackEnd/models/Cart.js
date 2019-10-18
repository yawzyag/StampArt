const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  user_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  quantity: {
    type: Number,
    default: 0,
    require: true
  },
  price: {
    type: Number,
    default: 0,
    require: true
  },
  user_direction: {
    type: String,
    require: true
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products"
    }
  ]
});

module.exports = mongoose.model("Cart", CartSchema);
