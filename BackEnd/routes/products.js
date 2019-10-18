const express = require('express');
const Product = require('../models/Products');
const router = express.Router();

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
router.post('/', async (req, res) => {
  const product = new Product(req.body);
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
