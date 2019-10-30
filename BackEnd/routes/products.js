const express = require('express');
const Product = require('../models/Products');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const verify = require('./verifyToken');

const storage = multer.diskStorage({
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

const img = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 }, fileFilter: fileFilter });

// get all posts from database
router.get('/', async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

// create a new post
router.post('/', verify, img.single('p_image'), async (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    product_name: req.body.product_name,
    description: req.body.description,
    quantity: req.body.quantity,
    p_image: "http://www.stampart.company:5000/" + req.file.path
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get post with id
router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete post
router.delete('/:productId', async (req, res) => {
  try {
    const removedProduct = await Product.deleteOne({
      _id: req.params.productId
    });
    res.json(removedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update post
router.patch('/:productId', async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          title: req.body.title
        }
      }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
