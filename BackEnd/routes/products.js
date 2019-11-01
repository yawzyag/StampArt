const express = require('express');
const Product = require('../models/Products');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', async (req, res) => {
  // get all posts from database
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:productId', async (req, res) => {
  // Get post with id
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:productId', async (req, res) => {
  // Delete post by product id
  try {
    const removedProduct = await Product.deleteOne({
      _id: req.params.productId
    });
    res.json(removedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:productId', async (req, res) => {
  // Update post by product id
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
