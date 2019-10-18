const express = require("express");
const Cart = require("../models/Cart");
const router = express.Router();

// get all carts from database
router.get("/", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get cart by id
router.get("/:cartId", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.cartId);
    res.json(cart);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete cart by id
router.delete("/:cartId", async (req, res) => {
  try {
    const removedCart = await Cart.deleteOne({ _id: req.params.cartId });
    res.json(removedCart);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update cart by id
router.patch("/:cartId", async (req, res) => {
  try {
    const updatedCart = await Cart.updateOne(
      { _id: req.params.cartId },
      {
        $set: {
          name: req.body.name,
          quantity: req.body.quantity,
          price: req.body.price,
          userDirection: req.body.userDirection
        }
      }
    );
    res.json(updatedCart);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
