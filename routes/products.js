const express = require('express');
const Product = require('../models/Products');
const router = express.Router();

// get all posts from database
router.get('/', async (req, res) => {
  try {
    const posts = await Product.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// create a new post
router.post('/', async (req, res) => {
  const post = new Product({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get post with id
router.get('/:postId', async (req, res) => {
  try {
    const post = await Product.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Product.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Product.updateOne({ _id: req.params.postId }, {
      $set: {
        title: req.body.title
      }
    });
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
