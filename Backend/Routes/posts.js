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
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);
    if (user) {
      try {
        console.log("inside try");
        await Post.deleteMany({ username: req.body.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      res.status(404).json("User not Found");
    }
  } else {
    res.status(401).json("you can delete only through your account");
  }
});

// ! DELETE POST

// !GET POST
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
