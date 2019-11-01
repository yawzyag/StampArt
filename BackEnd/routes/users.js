const express = require('express');
const User = require('../models/Users');
const Cart = require('../models/Cart');
const Product = require('../models/Products');
const { registerVal } = require('../val/validation');
const bcrypt = require('bcryptjs');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');

const storage = multer.diskStorage({
  // add img folder to storage the img
  // Generate name for storing the img
  destination: function (req, file, callback) {
    callback(null, './img/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

const fileFilter = (req, file, callback) => {
  //reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const img = multer({
  // multer image generate limit and filter
  storage: storage,
  limits: { 
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get('/', async (req, res) => {
  // get all users from database
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
router.post('/:userId/product', img.single('p_image'), async (req, res) => {
  const { userId } = req.params;
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    product_name: req.body.product_name,
    description: req.body.description,
    quantity: req.body.quantity,
    p_image: "http://www.stampart.company:5000/" + req.file.path
  });
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
    res.json({ user_id: user._id, name: user.name, user_direction: user.direction, user_avatar: user.user_avatar, user_email: user.email, user_products: user.products, user_name: user.username, user_status: user.status, cart_id: user.cart_id });
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
