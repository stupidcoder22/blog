const router = require("express").Router();
const Post = require("../Models/Post");
const User = require("../Models/User");

// *create new Post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! UPDATE NEW POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatepost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatepost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not allowed to update");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("post deleted successfully");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not allowed to delete");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// !GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// !GET ALL POST
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
