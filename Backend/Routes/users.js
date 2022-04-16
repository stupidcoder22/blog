const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const Post = require("../Models/Post");

// *update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can update only through your account");
  }
});

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

//*Get User
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
