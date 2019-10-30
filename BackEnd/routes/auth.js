const express = require('express');
const User = require('../models/Users');
const Cart = require('../models/Cart');
const Product = require('../models/Products');
const jwt = require('jsonwebtoken');
const { registerVal, loginVal } = require('../val/validation');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/register', async (req, res) => {
  // validation

  try {
    await registerVal(req.body);
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }

  // check if user alredy exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email alredy in use');

  try {
    // create secure hash
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    // create user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPass
    });
    const cart = new Cart();
    const product = new Product();
    user.cart_id = cart;
    user.products.push(product);
    await user.save();
    res.json({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login', async (req, res) => {
  // validation
  try {
    await loginVal(req.body);
  } catch (err) {
    return res.status(400).send("Pls Fill the inputs correctly");
  }

  // check if user alredy exists
  const userExist = await User.findOne({ email: req.body.email });
  if (!userExist) return res.status(400).send("Email doesn't exists");

  // password is correct
  const validPass = await bcrypt.compare(req.body.password, userExist.password);
  if (!validPass) return res.status(400).send("Password doesn't match");

  try {
    const token = await jwt.sign(
      { _id: userExist._id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: 3600
      }
    );
    res.header('auth-token', token).send({ token, _id: userExist._id });
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }
});

module.exports = router;
