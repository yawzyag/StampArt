const express = require('express');
const Cart = require('../models/Cart');
const verify = require('./verifyToken');
const router = express.Router();

// get all carts from database
router.get('/', verify, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get cart by id
router.get('/:cartId', verify, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.cartId);
    res.json(cart);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete cart by id
router.delete('/:cartId', verify, async (req, res) => {
  try {
    const removedCart = await Cart.findById(req.params.cartId);
    removedCart.products = [];
    await removedCart.save();
    res.json(removedCart);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update cart by id
router.patch('/:cartId', verify, async (req, res) => {
  try {
    const updatedCart = await Cart.findById(req.params.cartId);
    updatedCart.products.push(req.body.product_id)
    await updatedCart.save();
    res.json(updatedCart);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
