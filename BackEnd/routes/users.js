const express = require('express');
const User = require('../models/Users');
const Cart = require('../models/Cart');
const Product = require('../models/Products');
const { registerVal } = require('../val/validation');
const bcrypt = require('bcryptjs');
const router = express.Router();

// get all users from database
router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('cart_id products');
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// create a new cart by userid
router.post('/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const cart = new Cart(req.body);

  try {
    await User.updateOne(
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

// create a new product by userid
router.post('/:userId/product', async (req, res) => {
  const { userId } = req.params;
  const product = new Product(req.body);

  try {
    const user = await User.findById(userId);
    const savedProduct = await product.save();

    user.products.push(product);

    await user.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get user by id
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate(
      'cart_id products'
    );
    res.json({ user_id: user._id, name: user.name, user_direction: user.direction, user_avatar: user.user_avatar, user_email: user.email, user_products: user.products, user_name: user.username, user_status: user.status });
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete user by id
router.delete('/:userId', async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update user by id
router.patch('/:userId', async (req, res) => {
  try {
    await registerVal(req.body);
  } catch (err) {
    return res.status(400).send(err);
  }

  try {
    // create secure hash
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: hashPass,
          direction: req.body.direction
        }
      }
    );
    res.json(req.body.name);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
