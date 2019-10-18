const express = require("express");
const User = require("../models/Users");
const Cart = require("../models/Cart");
const router = express.Router();

// get all users from database
router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("cart_id products");
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// create a new user
router.post("/", async (req, res) => {
  const user = new User(req.body);
  const cart = new Cart();
  user.cart_id = cart;

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// create a new cart by userid
router.post("/:userId/cart", async (req, res) => {
  const { userId } = req.params;
  const cart = new Cart(req.body);

  try {
    const updatedUser = await User.updateOne(
      { _id: userId },
      {
        $set: {
          cart_id: cart
        }
      }
    );

    const user = await User.findById(userId);

    cart.user_name = user;

    const savedCart = await cart.save();
    res.json(savedCart);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get user by id
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate(
      "cart_id products"
    );
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete user by id
router.delete("/:userId", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update user by id
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          direction: req.body.direction,
          username: req.body.username,
          password: req.body.password,
          user_avatar: req.body.userAvatar
        }
      }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
