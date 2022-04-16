const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");

//Registration
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashpass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
